import datetime
import json
import pymongo
from pymongo import MongoClient

#for PC: client = MongoClient('localhost', 27017)

client = pymongo.MongoClient("mongodb+srv://Nekit:1234@cluster0-q6s9c.mongodb.net/test?retryWrites=true&w=majority")
db = client["test_db_check"]
collection = db["twitter_json_check"] 

print("access garanted")

message = {"_id":"1","Hey":"Bro","How you":"sub"}
post = db.post
result = post.insert_one(message)
#result = collection.insert_one(message)



#with open('Filtered.json') as f:
#    file_data = json.load(f)
#collection.insert_one(file_data)


#Delete all records: result = collection.delete_many({})