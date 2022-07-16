#
#   Hello World server in Python
#   Binds REP socket to tcp://*:5555
#   Expects b"Hello" from client, replies with image URL
#

import time
import zmq

import pandas as pd
import json
import requests

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:5555")

while True:
    #  Wait for next request from client
    message = socket.recv()
    print(f"Received request: {message}")

    #  Do some 'work'
    base_url = 'https://frinkiac.com/api/random'

    json_file = requests.get(base_url).json()

    episode = json_file['Frame']['Episode']
    timestamp = json_file['Frame']['Timestamp']

    subtitles = []
    for index in range(0, len(json_file['Subtitles'])):
        subtitles.append(json_file['Subtitles'][index]['Content'])

    image_url = 'https://frinkiac.com/img/' + str(episode) + '/' + str(timestamp) + '.jpg'

    print((image_url))


    #  Send reply back to client
    socket.send(image_url)






# # import requests
# from PIL import Image
# import urllib.request


# URL = 'https://frinkiac.com/api/random'

# with urllib.request.urlopen(URL) as url:
#     print (r)


# URL = 'http://www.w3schools.com/css/trolltunga.jpg'

# with urllib.request.urlopen(URL) as url:
#     img = Image.open(url)
#     img.show()





