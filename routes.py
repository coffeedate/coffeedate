"""REST API for saying hi."""
# from app import app as application
from flask import *
# import send_static_file
import os
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
labels = [] * train_size

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