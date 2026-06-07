class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1

        while(left <= right){
            let midValue = Math.floor((left + right) / 2)

            if(target === nums[midValue]) {
                return midValue
            } else if(target <= nums[midValue]){
                right = midValue - 1
            } else {
                left = midValue + 1
            }
        }

        return -1
    }
}
