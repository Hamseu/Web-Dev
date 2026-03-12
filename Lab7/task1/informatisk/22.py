from math import sqrt
N = float(input())
if N == 1:
    print("YES")
i = 2

b = False

while i<=N:
    if (i == N):
        print("YES")
        b = True
        break
    i *= 2
if (b != True):
    print("NO")
