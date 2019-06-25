money, c500, c100, c50, c10, = 0,0,0,0,0

money = int(input("교환할 금액"))

c500 = money
money %= 500

c100 = money
money %= 100

c50 = money
money %= 50

c10 = money
money %= 10

print("500원 %d개" % c500)
print("100원 %d개" % c100)
print("50원 %d개" % c50)
print("10원 %d개" % c10)
print("교환 불가 %d개" % money)
