import json
import tweepy
from tweepy import OAuthHandler

class TwitterConnect:
    
    consumer_key = '9XdV4iYbBBl0kUtfrrfbjHX18'
    consumer_secret = 'TWJ65VeJw8YXU3bg2AjJjnYh7zdZx1FCmPVLeqWMeCzmwGtBWO'
    access_token = '1194502005164773376-vpQOBQ5xqh0hSkHMhdv1svC1nZoNuX'
    access_secret = '1K3G4IYmF8GJI45u7IcVrGFAU5ihrfP1LtB4EevoJuiX9'
    
    def __init__(self):
        pass

    def connect(self):
        auth = OAuthHandler(self.consumer_key, self.consumer_secret)
        auth.set_access_token(self.access_token, self.access_secret)
        self.api = tweepy.API(auth)
        return self.api
      
