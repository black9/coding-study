while True:
     
    a= input("문자열을 입력하시오")


    if a.isdigit():
        print("숫자만 입니다")
    elif a.isalpha():
        print("문자입니다")
    elif a.isalnum():
        print("숫자 + 문자 입니다")
     
    ex = input("종료 y/n")
    if ex == 'n' :
        break;
    else:
        continue
