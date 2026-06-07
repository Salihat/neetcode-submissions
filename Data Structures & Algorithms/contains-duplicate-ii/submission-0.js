class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let hashtable = {}

        for(let i = 0; i < nums.length; i++) {
            let duplicates = hashtable[nums[i]]

            if(duplicates !== undefined){
                let result = i - hashtable[nums[i]]
                if(result <= k){
                    return true
                }
            }
            hashtable[nums[i]] = i

        }
        return false

    }
}

