class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let val2 = 0

        for(let val1 = 0; val1 < nums.length; val1++){
            let currentValue = nums[val1]

            if(currentValue != val){
                nums[val2] = currentValue
                val2++
            }
        }
        return val2
    }
}
