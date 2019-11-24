import pymongo
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

db = client["pymongo_db"]
collection = db["twitter_json"] 

post = {"_id": 0, "Таблица": "Тестовая", "Работает":"Отлично"}

collection.insert_one(post)
print("Access Garanted")
