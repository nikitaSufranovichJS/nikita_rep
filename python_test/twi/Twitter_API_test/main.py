import tweepy                               # лишние import
from tweepy import OAuthHandler
from file_manager import TwitterFileManager
from twitter_connect import TwitterConnector
from twitter_data import TwitterData
from tweepy import API

#Twitter
twitter_connect = TwitterConnector()
twitter_data = TwitterData()
twitter_file_manager = TwitterFileManager() 

twitter_connect.connect()

count_of_tweets = 1000
query = "Premier League"
saved_dictionary = twitter_data.get_by_query(query,count_of_tweets)

twitter_file_manager.save_data(saved_dictionary, "Premier League.json")
#twit_save.load_data(data_save_dict, "Premier League.json")


key_words = ["Bernd Leno","Emiliano Martinez","Matt Macey","Hector Bellerin","Kieran Tierney","Sokratis","Holding Rob","Mustafi Shrodran","Chambers Calum","Mavropanos Konstantios","Ceballos Dani","Ozil Mesut","Torreira Lucas","Maitland-Niles Ainsley","Willock Joe","Guendouzi Matteo","Smith Rowe Emile","Granit Xhaka","Alendre Lacaztte","Aubameyang","Martimelli Gabriel","Arsenal"]

key_breakwords = ["league", "championship", "lose"]

twitter_handler = twitter_data.handle(saved_dictionary, key_words, key_breakwords) 

twitter_file_manager.save_data(twitter_handler, "Filtered.json") # не сразу понял что такое twitter_handler 

#twit_save.load_data(twitter_handler, "Filtered.json")
