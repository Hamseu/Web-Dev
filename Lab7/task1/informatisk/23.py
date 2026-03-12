
N = float(input())
if N == 1:
    print("YES")
cnt = 1

accum = 2

b = False

while accum<=N:
    accum *= 2
    cnt += 1
print(cnt)