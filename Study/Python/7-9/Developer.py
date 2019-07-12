from tkinter import *
from urllib import request
from bs4 import BeautifulSoup

def saveFile():
    target = request.urlopen("http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108")
    soup = BeautifulSoup(target, "html.parser")
    for location in soup.select("location"):
        city = location.select_one("city").string
        wf = location.select_one("wf").string
        tmn = location.select_one("tmn").string
        tmx = location.select_one("tmx").string
        
        saveFile = open(city + ".txt", "w")
        saveFile.write("지역:"+ city + "시(군) \n")
        saveFile.write("날씨:"+ wf + "\n")
        saveFile.write("최저:"+ tmn + "도 \n")
        saveFile.write("최고:"+ tmx + "도 \n")
w = Tk()

def readFile():
    global input
    input = input("지역을 입력하세요.")
    readFile = open(input + ".txt", "r")
    contents = readFile.read()
    text.insert(END, contents)


save = Button(w, text = "날씨 데이터 저장",
            fg = "black",
            font = "바탕체 20 bold",
            command = saveFile
)

read = Button(w, text = "날씨 불러오기",
            fg = "black", 
            font = "바탕체 20 bold",
            command = readFile

)

text = Text(w, height = 10, width =  40,
            fg = "black",
            font = "바탕체 20 bold"
)


save.pack()
read.pack()
text.pack()

w.mainloop()

