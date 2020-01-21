#!./venv/bin/python3

import sys
import requests

import sihprediction

def downloadFile(uri):
	
	if(uri == None):
		return

	r = requests.get(uri)
	name = './test_image.jpg'

	with open(name, 'wb') as f:
		f.write(r.content)

def getCrop():

	# downloadFile(sys.argv[1])

	# res = sihprediction.work()

	# print(res)
	print('wheat')
	sys.stdout.flush()

getCrop()