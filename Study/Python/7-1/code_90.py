def genFunc():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 1

print(list(genFunc()))

