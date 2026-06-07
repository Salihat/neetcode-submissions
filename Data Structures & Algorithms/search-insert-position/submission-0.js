class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0
        let right = nums.length - 1

        while(left <= right){
            let midValue = Math.floor((left + right) / 2)

            if(nums[midValue] ===  target){
                return midValue
            } else if(nums[midValue] < target) {
                left = midValue + 1
            } else {
                right = midValue - 1
            }
        }
        return left
    }
}
