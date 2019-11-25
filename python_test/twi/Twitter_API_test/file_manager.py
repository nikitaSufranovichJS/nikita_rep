import json

class TwitterFileManager:

    def save_data(self, data, path):
        with open(path, 'w') as json_file:
            json.dump(data, json_file)

    def load_data(self, path):
        with open(path, 'r') as json_file:
            data = json.load(json_file)
            return data