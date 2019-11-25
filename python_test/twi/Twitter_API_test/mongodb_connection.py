import json
import pymongo
from pymongo import MongoClient

#for PC: client = MongoClient('localhost', 27017)

client = pymongo.MongoClient("mongodb+srv://Nikita:1234@cluster0-q6s9c.mongodb.net/test?retryWrites=true&w=majority")
db = client["test_db"]
collection = db["twitter_json"] 

print("access garanted")

post = {"Hey":"Bro"}
collection.insert_one(post)



#with open('Filtered.json') as f:
#    file_data = json.load(f)
#collection.insert_one(file_data)


#Delete all records: result = collection.delete_many({})