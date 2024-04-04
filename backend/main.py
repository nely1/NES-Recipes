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




# Part 2: Test API - Insert hard-coded data to test connection to database
@app.route("/test")
def test():
    db.collection.insert_one({"name": "CISSA"})
    return "Connected to the database!"

# Part 3: HTTP Get method - API to return all recipes currently stored in the database
@app.route("/get-all")
def get_all():
    # Collect all the data from the database
    all = db.collection.find()
    print("Fetched from db")
    print(all)
    # For each document, convert _id from type ObjectId to string so it can be JSON serializable
    data = []
    for doc in all:
        doc["_id"] = str(doc["_id"])
        data.append(doc)


    # Return as JSON type
    return jsonify(data)

# Part 4: HTTP Post method - API to insert one recipe into the database
@app.route("/insert-one", methods=["POST"])
def insert_one():
    input_json = request.get_json()


    # this serves as a simple validation that checks if all the fields we need
    # are in the request, and that we're not entering erroneous entries either
    dict_to_return = {
        "name": input_json["name"],
        "ingredients": input_json["ingredients"],
        "method": input_json["method"],
    }
    db.collection.insert_one(dict_to_return)
    # the above call mutates dict_to_return to include the _id of the new entry


    # in the database, Data of type ObjectID can't be parsed by the browser
    # so we convert it to a string first
    dict_to_return["_id"] = str(dict_to_return["_id"])
    return dict_to_return



if __name__ == "__main__":
    app.run(port=8000, debug=True)