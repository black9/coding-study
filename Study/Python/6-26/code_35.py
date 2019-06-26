h = 0; i = 0; a = 0

a = int(input("값 입력하세요"))

for i in range(1, a + 1, 1) :
    h = h + i
        
print("1에서 %d까지  %d" % (a, h))
