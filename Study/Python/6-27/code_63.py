foods = ['떡볶이', '짜장면', '라면', '피자', '맥주' ,'치킨' ,'삼겹살']
sides = ['오뎅', '단무지', '김치', '피클']

for foods, side in zip(foods, sides):
    print(foods, '->' , side)
