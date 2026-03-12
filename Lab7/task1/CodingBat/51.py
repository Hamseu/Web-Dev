def count_evens(nums):
  cnt = 0
  for i in nums:
    if i % 2 == 0:
      cnt += 1
  return cnt

def big_diff(nums):
  return max(nums) - min(nums)


def centered_average(nums):
    nums_sorted = sorted(nums)
    trim = nums_sorted[1:-1]
    return sum(trim) // len(trim)


def sum13(nums):
    total = 0
    skip_next = False

    for num in nums:
        if skip_next:
            skip_next = False
            continue
        if num == 13:
            skip_next = True
            continue
        total += num

    return total


def sum67(nums):
    total = 0
    in_section = False

    for num in nums:
        if num == 6:
            in_section = True
            continue
        if in_section:
            if num == 7:
                in_section = False
            continue
        total += num

    return total

def has22(nums):
    b = "".join(str(n) for n in nums)
    return "22" in b
