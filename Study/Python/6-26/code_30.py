select, answer, numStr ,num1, num2 = 0, 0, "", 0, 0

select = int(input("값을 입력하세요 :"))


if select == 1:
    numStr = input("수식 입력 : ")
    answer = eval(numStr)
    print("%s 결과는 %5.1f 입니다"% (numStr, answer))
elif select == 2:
    num1 = int(input("첫번째 숫자 입력"))
    num2 = int(input("두번째 숫자 입력"))
    for i in range(num1, num2+1):
        answer = answer + i
    print("%d+...+%d는 %d 입니다"%(num1, num2, answer))
else:
    print("1또는 2만 입력해야됨")
