from tkinter import *
window = Tk()
window.title("냥이들^^")

photo = PhotoImage(file = "image/dog.gif")
photo2 = PhotoImage(file = "image/cat2.gif")

label1 = Label(window, image = photo)
label2 = Label(window, image = photo2)

label1.pack(side=LEFT)
label2.pack()
window.mainloop()

