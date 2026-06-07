class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hashtable = {}

        for(let i = 0; i < nums.length; i++) {
            let isDuplicate = hashtable[nums[i]]

            if(isDuplicate !== undefined){
                return true
            } else {
                hashtable[nums[i]] = true
            }
        }

        return false
    }
}
