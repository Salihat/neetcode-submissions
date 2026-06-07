class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let value1 = 0

        for(let value2 = 0; value2 < nums.length; value2++) {
            if(nums[value2] !== 0) {
                const a = nums[value1]
                const b = nums[value2]

                nums[value1] = b
                nums[value2] = a

                value1++
            }
        }
    }
}
