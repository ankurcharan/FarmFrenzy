import cv2
import numpy as np
import os
import csv

def get_data(filename,index):
	f = os.listdir("./"+filename)
	li = []
	for loc in f:
		data = cv2.imread("./" + filename + "/" + loc)
		if data is not None:
			h, w, c = data.shape
			if h<240 and w< 150:
				print(data.shape)
			data = cv2.resize(data,(240,150), interpolation = cv2.INTER_AREA)
			image_data = np.reshape(data, (150*240*3)).tolist()
			image_data.append(index)
			li.append(image_data)
	print(len(li))
	return li
			# cv2.imshow("name",data)
			# cv2.waitKey(0)

li = []
# print(len(get_data("Coffee",0)))
li.extend(get_data("Coffee",0))
li.extend(get_data("bottlegourd",1))
li.extend(get_data("Cotton",2))
li.extend(get_data("wheat",3))
li.extend(get_data("Sugarcane",4))
print(len(li))

with open('dataset.csv', 'w', newline='') as file:
    		writer = csv.writer(file)
    		writer.writerows(li)