def XORE(a, b):
    if((a or b) and (not(a and b))):
        return True
    else:
        return False