import tweepy
from tweepy import OAuthHandler
from file_manager import TwitterSaveService
from twitter_connect import TwitterConnect
from twitter_data import TwitterData
from tweepy import API

#Twitter
twitter_connect = TwitterConnect()
twitter_data = TwitterData()
twitter_save_manager = TwitterSaveService()

twitter_connect.connect()

saved_dictionary = twitter_data.get_by_query("Premier League",1000)

twitter_save_manager.save_data(saved_dictionary, "Premier League.json")
#twit_save.load_data(data_save_dict, "Premier League.json")


key_word = ["Bernd Leno","Emiliano Martinez","Matt Macey","Hector Bellerin","Kieran Tierney","Sokratis","Holding Rob","Mustafi Shrodran","Chambers Calum","Mavropanos Konstantios","Ceballos Dani","Ozil Mesut","Torreira Lucas","Maitland-Niles Ainsley","Willock Joe","Guendouzi Matteo","Smith Rowe Emile","Granit Xhaka","Alendre Lacaztte","Aubameyang","Martimelli Gabriel","Arsenal"]

key_breakword = ["league","champoinship","lose"]

filter_dictionary = twitter_data.filterDictionary(saved_dictionary, key_word)

twitter_handler = twitter_data.handler(saved_dictionary, key_word, key_breakword)

twitter_save_manager.save_data(twitter_handler, "Filtered.json")
#twit_save.load_data(twitter_handler, "Filtered.json")
