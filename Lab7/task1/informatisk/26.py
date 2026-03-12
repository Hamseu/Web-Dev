N = int(input())

a= [int (b) for b in input().split(" ")]
cnt = 0

for ch in a:
    if (ch > 0):
        cnt+= 1
print(cnt)