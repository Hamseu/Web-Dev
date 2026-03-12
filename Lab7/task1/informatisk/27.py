n = int(input())
a = [int(b) for b in input().split(" ")]

cnt = 0
for i in range(1, len(a) -1, 1):
    if(a[i] > a[i-1]):
        cnt +=1
print(cnt)