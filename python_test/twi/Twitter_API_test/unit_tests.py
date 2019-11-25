import tweepy
import unittest
from twitter_data import TwitterData


class test_case(unittest.TestCase):

    wordKey = ["Bernd Leno","Emiliano Martinez","Matt Macey","Hector Bellerin","Kieran Tierney","Sokratis","Holding Rob","Mustafi Shrodran","Chambers Calum","Mavropanos Konstantios","Ceballos Dani","Ozil Mesut","Torreira Lucas","Maitland-Niles Ainsley","Willock Joe","Guendouzi Matteo","Smith Rowe Emile","Granit Xhaka","Alendre Lacaztte","Aubameyang","Martimelli Gabriel","Arsenal"]

    breakWord = ["league","champoinship","lose"]

    def test_empty_dict(self):
        twit_dating = TwitterData()
        
        filterDict = twit_dating.filterDictionary({},[])
        self.assertDictEqual(filterDict,{})
    

    def test_empty_breakWords(self):
        breakWords = self.breakWord

        for word in breakWords:
            containsbreakWords = word
            self.assertNotEqual(containsbreakWords, breakWords)


    def test_count_tweets(self):
        twit_dating = TwitterData()

        counting = twit_dating.get_by_query("Weather", 50)
        self.assertEqual(len(counting), 50)
   


unittest.main() 