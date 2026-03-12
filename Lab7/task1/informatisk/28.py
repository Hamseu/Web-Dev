n = int(input())
a = [int(b) for b in input().split(" ")]

flag = True

for i in range(len(a)-2):
    if(a[i] == 0 and a[i+1] == 0):
        print("YES")
        flag = False
        break
    elif(a[i]>0 and a[i+1] >0):
        print("YES")
        flag = False
        break
    elif(a[i] < 0 and a[i+1]< 0):
        print("YES")
        flag = False
        break
if (flag):
    print("NO")
