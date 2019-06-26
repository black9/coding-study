import turtle
import random

swidth,sheigth = 300, 300
r, g, b, dist = [0] * 4
pSize = 3

turtle.title("거북 소라 그리기")
turtle.shape('turtle')
turtle.pensize(pSize)
turtle.setup(width=swidth+30, height=sheigth+30)
turtle.screensize(swidth,sheigth)
turtle.speed(10)

dist = 5

while True:
    r = random.random()
    g = random.random()
    b = random.random()
    turtle.pencolor((r, g, b))
    turtle.left(30)
    turtle.forward(dist)
    dist += 1
    
