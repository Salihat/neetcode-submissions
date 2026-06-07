class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashTable = {};

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if((hashTable[complement] || hashTable[complement] == 0) && i !== hashTable[complement]){
                return [hashTable[complement], i]
            } else {
                hashTable[nums[i]] = i;
            }
        }
    }
}
