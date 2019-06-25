import sys

intvar, floatVar, boolVar, strVar, listVar, tupleVar, dictVar, setVar = [None] * 8

if __name__ == "__main__" :
    intVar = 0
    floatVar = 0.0
    boolVar = True
    strVar = ''
    tupleVar=()
    dictVar = {}
    setVar = set()

    print('intVar형 기본 크기 -->', sys.getsizeof(intVar))
    print('floatVar형 기본 크기 -->', sys.getsizeof(floatVar))
    print('boolVar형 기본 크기 -->', sys.getsizeof(boolVar))
    print('strVar형 기본 크기 -->', sys.getsizeof(strVar))
    print('tuple형 기본 크기 -->', sys.getsizeof(tupleVar))
    print('dictVar형 기본 크기 -->', sys.getsizeof(dictVar))
    print('setVar형 기본 크기 -->', sys.getsizeof(setVar))
