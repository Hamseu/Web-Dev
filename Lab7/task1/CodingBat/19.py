def array_front9(nums):
  cnt = 0
  for i in nums:
    if (i == 9 and cnt <4):
       return True
    else:
      cnt += 1
    if cnt > 4:
      return False
  return False
