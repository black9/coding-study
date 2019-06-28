def addition(n):
    return n + n

numbers = (1, 2, 3, 4)
result = map(addition, numbers)
print(list(result))


ss = '파이썬'
print(ss.center(10))
print(ss.center(10, '-'))
print(ss.ljust(10))
print(ss.rjust(10))
print(ss.zfill(10))

print('1234'.isdigit())
print('abcd'.isalpha())
print('abc1234'.islower())
print('abcd'.isupper())
print(' '.isspace())
