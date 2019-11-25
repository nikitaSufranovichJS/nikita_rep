import unittest
import json
import tweepy
from file_manager import TwitterSaveManager
from tweepy import OAuthHandler
from twitter_connect import TwitterConnect
from tweepy import API


class TwitterData:

    twitter_api = TwitterConnect()

    def __init__(self):
        self.api = self.twitter_api.connect()        

    def get_by_query(self, query, count):
        query_dict = {}
        for tweet in tweepy.Cursor(self.api.search, q=query).items(count):
            query_dict.update({tweet.id:tweet.text})
        return query_dict


    def filter_dictionary(self, dict_filter, wordKeys):
        filter_values_Dict = {}
        for key, value in dict_filter.items():
            for wordKey in wordKeys:
                if wordKey.lower() in value.lower():
                    filter_values_Dict[key] = value
        return filter_values_Dict         


    def filter_breakword_dictionary(self, dict_filter, breakWords):
        break_word_Dict = {}
        for key, value in dict_filter.items():
            for breakWord in breakWords:
                if breakWord.lower() in value.lower():
                    break_word_Dict[key] = value
        return break_word_Dict


    def handler (self, dict_filter, wordKeys, breakWords):
        filtered_Dict = {}
        for key,value in dict_filter.items():
            for wordKey in wordKeys:
                if wordKey.lower() in value.lower() and not self.breakWordsContains(value, breakWords):
                    filtered_Dict[key] = value
        return filtered_Dict


    def breakWordsContains (self, value, breakWords):
        for breakWord in breakWords:
            if breakWord.lower() in value.lower():
                return True
        return False