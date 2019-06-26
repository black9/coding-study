i, k= 0, 0
dan = int(input("단을 입력하세요 : "))

for i in range(2, 10, 1) :
    for k in range (1, 10, 1):
     print("%d  X  %d  =  %2d" % (i, k, i * k))
     print("")
