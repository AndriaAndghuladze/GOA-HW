from turtle import*
width(6)
begin_fill()
color("gray")
speed(6)
shape("turtle")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()
#end of square

#drawing adoor
begin_fill()
forward(70)
color("yellow")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("black")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#start first window

penup()
goto(130, 130)
pendown()

color("red")
left(120)
forward(50)

left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)



#start second window

penup()
goto(60, 130)
pendown()

right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(50)

penup()
goto(130, 130)
pendown()

right(90)
forward(25)
left(90)
forward(50)

penup()
goto(-60, -5)
pendown()


#second house
begin_fill()
color("gray")
speed(6)
shape("turtle")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()
#end of square

penup()
goto(-130, -5)
pendown()

#drawing door
begin_fill()
color("yellow")
forward(120)
left(90)
forward(55)
left(90)
forward(120)
end_fill()

penup()
goto(-125, 130)
pendown()

#window

color("red")
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)    
left(90)
forward(50)
left(90)
forward(25)
left(90)
forward(50)

penup()
goto(-205, 130)
pendown()

#second window
color("red")
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(50)

penup()
goto(-265, 190)
pendown()
  
#start roof
begin_fill()
color("black")
right(30)
forward(200)
right(117)
forward(200)
end_fill()



exitonclick()