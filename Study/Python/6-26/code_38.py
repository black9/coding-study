i, k, l= 0, 0, ""

for i in range(2, 10) :
     l = l + (" -  %d단  -" % i)

print(l)

for i in range(1, 10) :
     l = ""
     for k in range(2, 10) :
          l = l + str("%2dX %2d= %2d" % (k, i, k*i))
     print(l)
