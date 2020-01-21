import requests
# import uuid


uri = 'https://miro.medium.com/max/2022/1*brgt6gPYKhf3aGHjWjTnNg.png'

r = requests.get(uri)
name = 'test_image.jpg'

with open(name, 'wb') as f:
	f.write(r.content)
