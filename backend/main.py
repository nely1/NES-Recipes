from flask import Flask, jsonify, request
from bson import ObjectId
from flask_cors import CORS
import json
from db import db
from PIL import Image
import io
import matplotlib.pyplot as plt

# Create Flask app to connect front-end, back-end, and database
app = Flask(__name__)
CORS(app)

# Part 1: Test Flask
@app.route("/")
def flask_mongodb_atlas():
    return "Hello World"

@app.route("/add-ingredient", methods = ["POST"] )
def insert_ingredient(name = None, amount = None):
    ## Fetch data from request or function invokation
    if name is not None and amount is not None:
        ingredient = {"name": name, "amount": amount}
    else:
        ingredient = request.get_json()

    # Check if ingredient exists
    query = {
        "name": ingredient["name"]
    }
    found_ingredient = db.ingredient.find_one(query)
    
    # Update if it already exists
    if found_ingredient:
        result = update_ingredient(ingredient["name"], ingredient["amount"])
        return "Ingredient already there, updating amount instead. \n {}".format(result)

    db.ingredient.insert_one(ingredient)
    ingredient["_id"] = str(ingredient["_id"])
    return json.dumps(ingredient)

@app.route("/update-ingredient", methods=["POST"])
def update_ingredient(name = None, amount = None):
    ## Fetch data from request or function invokation
    if name is not None and amount is not None:
        ingredient = {"name": name, "amount": amount}
    else:
        ingredient = request.get_json()
        print(ingredient)

    query = {
        "name": ingredient["name"]
    }
    # Check if the ingredient exists
    found_ingredient = db.ingredient.find_one(query)
    
    # Insert into database if it is new ingredient found
    if not found_ingredient:
        result = insert_ingredient(ingredient["name"], ingredient["amount"])
        return "Ingredient not found, creating new entry...{}".format(result)

    # Update quantities
    ingredient["amount"] += int(found_ingredient["amount"])
    updated_ingredient = {"$set": ingredient}
    result = db.ingredient.update_one(query, updated_ingredient)
    return json.dumps(ingredient)

@app.route("/post-recipe", methods = ["POST"])
def insert_recipe():
    recipe  = request.get_json()

    query = {
        "name": recipe["name"]
    }
    
    found_recipe = db.recipe.find_one(query)

    if not found_recipe:
        # Check and insert all ingredients:
        for ingredient in recipe["ingredients"]:
            insert_ingredient(ingredient["name"], 0)
        
        db.recipe.insert_one(recipe)
        return "Added recipe!"

    return "Recipe Exists"

@app.route("/image-get")
def show_recipe():
    query = {
        "name": "duck"
    }
    image = db.recipe.find_one(query)
    pil_img = Image.open(io.BytesIO(image['image']))
    plt.imshow(pil_img)
    plt.show()
    return "Showing duck!"

@app.route("/make-recipe")
def make_recipe():
    # Check if there is enough ingredients
    
    query = {"name":"beef"}
    recipe = db.recipe.find_one(query)

    for ingredient in recipe["ingredients"]:
        query = {
            "name": ingredient["name"]
        }
        result = db.ingredient.find_one(query)
        if ingredient["amount"] > result["amount"]:
            return "Insufficient ingredients"
        
    # Make the recipe
    for ingredient in recipe["ingredients"]:
        update_ingredient(ingredient["name"], -ingredient["amount"])
        
    return "Bon appetit"

@app.route("/get-ingredients")
def get_all_ingredients():
    all_ingredients = []
    for ingredient in db.ingredient.find():
        ingredient["_id"] = str(ingredient["_id"])
        all_ingredients.append(ingredient)
    return json.dumps(all_ingredients)

@app.route("/get-recipes")
def get_all_recipes():
    all_recipes = []
    for ingredient in db.recipe.find():
        ingredient["_id"] = str(ingredient["_id"])
        ingredient['image'] = "NULL"
        all_recipes.append(ingredient)
    return json.dumps(all_recipes)

if __name__ == "__main__":
    app.run(port=8000, debug=True)