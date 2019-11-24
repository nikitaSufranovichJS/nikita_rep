import tweepy
from file_manager import save_service
from tweepy import OAuthHandler
from twitter_connect import twitter_connector
from twitter_data import twitter_data
from tweepy import API

#Twitter
twit_connector = twitter_connector()
twit_data = twitter_data()
twit_save = save_service()

twit_connector.connect()

data_save_dict = twit_data.get_by_query("Premier League",1000)

twit_save.save_data(data_save_dict, "Premier League.json")
#twit_save.load_data(data_save_dict, "Premier League.json")


wordKey = ["Bernd Leno","Emiliano Martinez","Matt Macey","Hector Bellerin","Kieran Tierney","Sokratis","Holding Rob","Mustafi Shrodran","Chambers Calum","Mavropanos Konstantios","Ceballos Dani","Ozil Mesut","Torreira Lucas","Maitland-Niles Ainsley","Willock Joe","Guendouzi Matteo","Smith Rowe Emile","Granit Xhaka","Alendre Lacaztte","Aubameyang","Martimelli Gabriel","Arsenal"]

breakWord = ["league","champoinship","lose"]

first_twitter_filt = twit_data.filterDictionary(data_save_dict, wordKey)

twitter_handler = twit_data.handler(data_save_dict, wordKey, breakWord)

twit_save.save_data(twitter_handler, "Filtered.json")
#twit_save.load_data(twitter_handler, "Filtered.json")
