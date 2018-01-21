"""REST API for saying hi."""
# from app import app as application
from flask import *
# import send_static_file
import os
import datetime
application = Flask(__name__, static_folder='dist')
BASE_URL = os.path.abspath(os.path.dirname(__file__))
CLIENT_APP_FOLDER = os.path.join(BASE_URL, "dist")

import numpy as np
np.random.seed(42)
codex = [['pets', 'no pets'],
		 ['stay in and watch netflix', 'go out instead of staying in'],
		 ['sexual compatibility matters', 'sexual compatibility does not matter'],
		 ['cup is half-empty','cup is half-full'],
		 ['morning person','night person'],
		 ['city person','country person'],
		 ['clean','messy'],
		 ['religious','not religious'],
		 ['want children','do not want children'],
		 ['eat in','eat out'],
		 ['play sports','do not play sports'],
		 ['follows politics','does not follow politics'],
		 ['spontaneous','predictable'],
		 ['want long-term relationship','does not want long-term relationship'],
		 ['procrastinates','does not procrastinate'],
		 ['likes to travel','does not like to travel'],
		 ['introvert','extrovert'],
		 ['close to your family','not close to your family'],		 
		 ]

train_size = 400
codex_length = len(codex)
ans = np.random.randint(2, size=(train_size,codex_length))
profiles = [[codex[i][ans[j][i]] for i in range(codex_length)] for j in range(train_size)]
labels = [None] * train_size

class User:
	def __init__(self, name, description, picture, interests, likes=[], likedBy=[], matches=[]):
		self.name = name
		self.description = description
		self.picture = picture
		self.interests = interests
		self.likes = likes
		self.likedBy = likedBy
		self.matches = matches
	def like(self, userName):
		self.likes.append(userName)
		if userName in self.likedBy:
			return self.match(userName)
		return False
	def getLiked(self, userName):
		self.likedBy.append(userName)
		if userName in self.likes:
			return self.match(userName)
		return False
	def match(self, userName):
		self.matches.append(userName)
		# return userName
		return True

auth = {'wellford': ['wellford1', 'Wellford Chan'],
		'james': ['james2', 'James Chen'],
		'kusthie': ['kusthie3', 'Kushtie Nguyen'],
		'panda': ['panda4', 'Ashwinee Panda']}

users = {'Wellford Chan': User(name='Wellford Chan',
			description='the boi',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11061206_10202668311107436_8620547020144133577_n.jpg?oh=9e13008c4ca1bbbd6e221369f8776d41&oe=5ADC8F1A',
			interests='long walks on the beach' ),
		'James Chen': User(name='James Chen',
			description='kassidin main',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/l/t1.0-9/14079948_10208635955750119_4515098002705318896_n.jpg?oh=659971a58f78a90e1b3facefec0b515f&oe=5AE97E85',
			interests='long walks on the beach' ),
		'Kushtie Nguyen': User(name='Kushtie Nguyen',
			description='smokes joints',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11146244_955466264494134_1735259667299678513_n.jpg?oh=5ec018932da6d589edb03bc1790b8322&oe=5AD83BE4',
			interests='long walks on the beach' ),
		'Ashwinee Panda': User(name='Ashwinee Panda',
			description='no longer endangered',
			picture='https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/26814904_878256455667619_4477007155290854499_n.jpg?oh=005ebf3cd5721f7d675865bfa307729a&oe=5AE4C9C2',
			interests='long walks on the beach' )
		}

def myconvert(o):
	if callable(o):
		return o.__str__()
	if isinstance(o, datetime.datetime):
		return o.__str__()
	return o.__dict__

@application.route('/api/makeLabel/', methods=["POST"])
def makeLabel():
	r = request.get_json()
	if "label" not in r:
		return json.dumps("bamboozle")
	labels[r["index"]] = r["label"]
	return json.dumps(labels[int(r["index"])])

@application.route('/api/getProfile/', methods=["GET"])
def getProfile():
	r = request.args
	if "index" not in r:
		return json.dumps("bamboozle")
	return json.dumps(profiles[int(r["index"])])

@application.route('/api/getLabels/', methods=["GET"])
def getLabels():
	return json.dumps(labels)

@application.route('/api/makeUser/', methods=["POST"])
def makeUser():
	r = request.get_json()
	if "userName" not in r:
		return json.dumps("bamboozle")
	auth[r['userName']] = (r['password'], r['name'])
	user = User(
		r['name'],
		r['description'],
		r['picture'],
		r['interests']
		)
	users[r['name']] = user
	return json.dumps(user, default = myconvert)

@application.route('/api/getUser/', methods=["GET"])
def getUser():
	r = request.args
	if "userName" not in r:
		return json.dumps("bamboozle")
	authInfo = auth[r["userName"]]
	truePass = authInfo[0]
	if truePass == r["password"]:
		return json.dumps(users[authInfo[1]], default = myconvert)

@application.route('/api/getAllUsers/', methods=["GET"])
def getAllUsers():
	return json.dumps(users, default = myconvert)

@application.route('/api/like/', methods=["POST"])
def likeye():
	r = request.get_json()
	if "userA" not in r:
		return json.dumps("bamboozle")
	userA = users[r["userA"]]
	if userA.like(r["userB"]):
		return json.dumps("You have a match!")
	return json.dumps("No match")

@application.route('/<path:path>/')
def send_js(path):
	return send_from_directory(CLIENT_APP_FOLDER,"index.html")

@application.route('/')
def index():
	return send_from_directory(CLIENT_APP_FOLDER,"index.html")

if __name__ == "__main__":
	# Setting debug to True enables debug output. This line should be
	# removed before deploying a production app.
	application.debug = True
	application.run()




# 1. Do you have or want any pets?
# 2. Would you rather stay in and watch netflix or go out?
# 3. Is sexual compatibility important to you?
# 4. Do believe a cup is half-empty or half-full?
# 5. Are you a morning or a night person?
# 6. Are you more of a city or country person?
# 7. Are you a clean or messy person?
# 8. Are you a religious person?
# 9. Do you want children?
# 10. Do you like to eat out or eat in?
# 11. Do you like to play sports?
# 12. Do you follow politics?
# 13. Are you spontaneous or predictable?
# 14. Are you looking for a long-term relationship?
# 15. Do you tend to procrastinate?
# 16. Do you like to travel?
# 17. Are you an introvert or extrovert?
# 18. Are you close with your family?



# Are you a festive person?
# Do you like to eat sweet or salty food?
# Do you enjoy memes?
# Do you eat to live or live to eat?
# Do you like to play video games?
# DIY or call an expert?
# Do you have siblings?
# Do you like to go to concerts?