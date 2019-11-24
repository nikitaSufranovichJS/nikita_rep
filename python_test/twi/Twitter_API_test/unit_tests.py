import tweepy
import unittest
from twitter_data import twitter_data


class test_case(unittest.TestCase):

    wordKey = ["Bernd Leno","Emiliano Martinez","Matt Macey","Hector Bellerin","Kieran Tierney","Sokratis","Holding Rob","Mustafi Shrodran","Chambers Calum","Mavropanos Konstantios","Ceballos Dani","Ozil Mesut","Torreira Lucas","Maitland-Niles Ainsley","Willock Joe","Guendouzi Matteo","Smith Rowe Emile","Granit Xhaka","Alendre Lacaztte","Aubameyang","Martimelli Gabriel","Arsenal"]

    breakWord = ["league","champoinship","lose"]

    def test_empty_dict(self):
        twit_dating = twitter_data()
        
        filterDict = twit_dating.filterDictionary({},[])
        self.assertDictEqual(filterDict,{})

    def test_count_tweets(self):
        twit_dating = twitter_data()

        counting = twit_dating.get_by_query("Weather", 50)
        self.assertEqual(len(counting), 50)

    def test_contains_wordKeys(self):
        twit_dating = twitter_data()

        wordKeys = twit_dating.filterDictionary(dict_filter, self.wordKey)
        


unittest.main() 