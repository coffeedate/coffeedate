import numpy as np
import csv
from itertools import repeat
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
labels = [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
james = [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0]
panda = [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1]
kushtie = [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]

def smc(X, Y):
	X = np.mat(X)
	Y = np.mat(Y)
	N1, M = np.shape(X)
	sim = ((X*Y.T)+((1-X)*(1-Y).T))/M
	return sim

similarities = [smc(james, ans) for ans  in ans[:100]]
similarities += [smc(kushtie, ans) for ans  in ans[100:200]]
similarities += [smc(panda, ans) for ans  in ans[200:300]]
similarities += [smc(kushtie, ans) for ans  in ans[300:train_size]]

#labeled_data = [[labels[i], ans[i]] for i in range(train_size)]

labeled_data = [[] for i in repeat(None, train_size)]

schema = ['label','smc'] + [code[0] for code in codex]

for i in range(train_size):
    labeled_data[i].append(labels[i])
    labeled_data[i].append(np.float(similarities[i]))
    for j in range(18):
        labeled_data[i].append(ans[i][j])
with open("labels.csv", "w") as f:
    writer = csv.writer(f)
    writer.writerow([g for g in schema]) 
    writer.writerows(labeled_data)
# with open("labels.csv", "w") as f:
#     writer = csv.writer(f)
#     writer.writerows(labeled_data[:299])

# with open("test.csv", "w") as g:
#     writer = csv.writer(g)
#     writer.writerows(labeled_data[300:])
    