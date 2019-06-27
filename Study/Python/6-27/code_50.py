
aa = [10, 20, 30, 40]
print("aa[-1]은 %d, aa[-2]는 %d"%(aa[-1], aa[-2]))


aa = [10, 20, 30, 40]
print(aa[0:3])
print(aa[2:4])

aa = [10, 20, 30, 40]

print(aa[:2])
print(aa[2:])


aa = [10, 20, 30, 40, 50, 60, 70]
print(aa[::2])
print(aa[::-2])
print(aa[::-1])

aa = [10, 20, 30]
aa[1]= 200
print(aa)

# 200, 201, 100, 101, 102 추가
aa = [10, 20, 30]
aa[1:2] = [200, 201]
aa[0:1] = [100, 101, 102]
print(aa)

## 20 삭제
aa = [10, 20, 30]
del(aa[1])
print(aa)

## 
aa = [10, 20, 30, 40, 50]
aa[1:4] = []
print(aa)

##
aa = [10, 20, 30]; aa = []; aa
aa = [10, 20, 30]; aa = None; aa
aa = [10, 20, 30]; del(aa); aa


