from flask_pymongo import pymongo

CONNECTION_STRING = "mongodb+srv://engj:oBJvcMh6tiWAM7G1@nes-recipe.v4te3ti.mongodb.net/?retryWrites=true&w=majority&appName=NES-Recipe"

# Create user that sends/receives requests
client = pymongo.MongoClient(CONNECTION_STRING)

# Find or create database
db = client.get_database("flask_mongodb_recipes")
