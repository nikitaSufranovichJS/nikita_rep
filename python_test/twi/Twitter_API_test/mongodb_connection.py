import datetime
import json # import file_manager
import pymongo
from pymongo import MongoClient
from bson import json_util
from file_manager import TwitterFileManager

#for PC: client = MongoClient('localhost', 27017)
client = pymongo.MongoClient("mongodb+srv://nik:1234@cluster0-kofjw.mongodb.net/test?retryWrites=true&w=majority")
db = client["test_db"]
collection = db["twitter_json"] 


fileManager = TwitterFileManager()
load = {}
load = fileManager.load_data("Premier League.json")

result = collection.insert_one(load)
