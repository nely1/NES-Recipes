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

@app.route("/add")
# @app.route("/insert-one", methods=["POST"])
def insert_ingredient():
    # data = request.get_json()
    data = {"name": "tomato", "quantity": 10}
    
    # Check if ingredient exists
    query = {
        "name": data["name"]
    }
    found_ingredient =db.ingredient.find_one(query)
    
    # Update if it already exists
    if found_ingredient:
        result = update_ingredient()
        return "Ingredient already there, updating quantity instead. \n {}".format(result)

    # Insert ingredient
    ingredient = {
        "name": data["name"],
        "quantity": data["quantity"]
    }
    db.ingredient.insert_one(ingredient)
    ingredient["_id"] = str(ingredient["_id"])
    return json.dumps(ingredient)

@app.route("/update")
def update_ingredient():
    # data = request.get_json()
    data = {"name": "tomato", "quantity": 10}
    query = {
        "name": data["name"]
    }

    # Check if the ingredient exists
    found_ingredient = db.ingredient.find_one(query)
    
    # Insert into database if new ingredient found
    if not found_ingredient:
        result = insert_ingredient()
        return "Ingredient not found, creating new entry...{}".format(result)

    # Update quantities
    data["quantity"] += found_ingredient["quantity"]
    updated_ingredient = {"$set": data}
    result = db.ingredient.update_one(query, updated_ingredient)
    return json.dumps(data)


@app.route("/image-test")
def insert_recipe():
    im = Image.open("./duck.jpg")
    image_bytes = io.BytesIO()
    im.save(image_bytes, format='JPEG')
    image = {
        'name': "Duck",
        'image': image_bytes.getvalue()
    }
    image_id = db.recipe.insert_one(image)
    return "Added duck!"

@app.route("/image-get")
def show_recipe():
    image = db.recipe.find_one()
    pil_img = Image.open(io.BytesIO(image['image']))
    plt.imshow(pil_img)
    plt.show()
    return "Showing duck!"

if __name__ == "__main__":
    app.run(port=8000, debug=True)