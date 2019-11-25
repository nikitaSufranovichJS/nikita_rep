import tweepy
from file_manager import TwitterFileManager # fix imports
from tweepy import OAuthHandler
from twitter_connect import TwitterConnector
from tweepy import API


class TwitterData:

    twitter_api = TwitterConnector()

    def __init__(self):
        self.api = self.twitter_api.connect()        

    def get_by_query(self, query, count):
        query_dict = {}
        for tweet in tweepy.Cursor(self.api.search, q=query).items(count):
            query_dict.update({tweet.id:tweet.text})
        return query_dict

    def handle (self, dict_filter, wordKeys, breakWords):# naming
        filtered_dict = {}
        for key,value in dict_filter.items():
            for wordKey in wordKeys:
                if wordKey.lower() in value.lower() and not self.breakWordsContains(value, breakWords):
                    filtered_dict[key] = value
        return filtered_dict


    def breakWordsContains (self, value, breakWords):
        for breakWord in breakWords:
            if breakWord.lower() in value.lower():
                return True
        return False