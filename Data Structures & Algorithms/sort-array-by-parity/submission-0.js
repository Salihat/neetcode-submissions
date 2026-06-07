class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        const store1 = []
        const store2 = []

        for(let i = 0; i < nums.length; i++) {
            let divisibleBy2 = nums[i] % 2 === 0
            if(divisibleBy2) {
                store1.push(nums[i])
            } else {
                store2.push(nums[i])
            }
        }

        return [...store1, ...store2]
    }
}
