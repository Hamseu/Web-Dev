a = int(input())
b = int(input())

print( 109 - (a*b)%109 if a < 0 else a*b%109)