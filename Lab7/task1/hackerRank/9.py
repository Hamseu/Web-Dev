N = int(input())
a = {}

for i in range(N):
    word = input()
    if word in a:
        a[word] += 1
    else:
        a[word] = 1

print(len(a))

for value in a.values():
    print(value, end=" ")