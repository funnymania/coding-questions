// Finds index of target in array of nums.
// Or, if not found, where the target would be inserted.
function BinarySearch(b, m, e, nums, target) {
  if (nums[m] == target) {
    return m;
  }

  if (b == e) {
    return nums[m] > target
      ? m
      : m + 1;
  }

  return (target < nums[m])
    ? BinarySearch(b, Math.floor((m + b) / 2), m, nums, target)
    : BinarySearch(m + 1, Math.floor((e + m + 1) / 2), e, nums, target);
}