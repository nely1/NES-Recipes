from flask import Flask, jsonify, request
from bson import ObjectId
from flask_cors import CORS

from db import db

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
    query = {
        "name": data["name"]
    }
    found_ingredient =db.ingredient.find_one(query)
    
    if found_ingredient:
        # update ingredient
        update_ingredient()
        return "Ingredient already there, updating quantity instead"

    ingredient = {
        "name": data["name"],
        "quantity": data["quantity"]
    }
    db.ingredient.insert_one(ingredient)

    return ingredient

@app.route("/update")
def update_ingredient():
    # data = request.get_json()
    data = {"name": "tomato", "quantity": 10}
    query = {
        "name": data["name"]
    }

    found_ingredient = db.ingredient.find_one(query)
    
    if not found_ingredient:
        # update ingredient
        insert_ingredient()
        return "Ingredient not found, creating new entry..."

    data["quantity"] += found_ingredient["quantity"]

    updated_ingredient = {"$set": data}
    db.ingredient.update_one(query, updated_ingredient)

    return updated_ingredient


if __name__ == "__main__":
    app.run(port=8000, debug=True)