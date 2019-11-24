import json
import pymongo
from pymongo import MongoClient

client = MongoClient("mongodb+srv://Nekit:1234@cluster0-q6s9c.mongodb.net/test?retryWrites=true&w=majority")
#client = MongoClient('localhost', 27017)

db = client["test_db"]
collection = db["twitter_json"] 

#post = {"_id": "1","Таблица": "Тестовая", "Работает":"Отлично"}

with open('Filtered.json') as f:
    file_data = json.load(f)


collection.insert_one(file_data)
print("Access Garanted")


#result = collection.delete_many({})