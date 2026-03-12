a, b = map(int, input().split(" "))
arr1 = [int(sd) for sd in input().split(" ")]

set1 = {int(sd) for sd in input().split(" ")}

set2 = {int(sd) for sd in input().split(" ")}

happy = 0
for j in arr1:
    if j in set1:
        happy += 1
    elif j in set2:
        happy -= 1
print(happy)