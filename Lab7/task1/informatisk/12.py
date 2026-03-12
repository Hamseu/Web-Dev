from math import sqrt

a = float(input())
b = float(input())

for i in range(int(a), int(b)):
    if (sqrt(i) % 1 != 0):
        continue
    else:
        print(i)