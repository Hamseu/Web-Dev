from math import sqrt

N = int(input())
i = 1

while i<N:
    if (sqrt(i)%1 == 0):
        print(i)
    i+=1
