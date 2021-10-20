import random


user_len = int(input("Enter the length of password : "))

str="abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_?"
password =  "".join(random.sample(str,user_len ))

print (password)