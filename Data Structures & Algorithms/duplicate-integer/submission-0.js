class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashTable= {}
        let isDuplicate = true
        for(let i = 0; i < nums.length; i++) {
           const checkDuplicate =  hashTable[nums[i]]
            if(checkDuplicate !== undefined) {
                return isDuplicate
            } else {
                hashTable[nums[i]] = isDuplicate
            }
        }
        return false
    }
}
