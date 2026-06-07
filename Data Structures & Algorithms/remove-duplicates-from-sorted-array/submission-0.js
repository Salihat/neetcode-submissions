class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let finger2 = 1

        for(let finger1 = 1; finger1 < nums.length; finger1++){
            let duplicate = nums[finger1]

            if(duplicate !== nums[finger1 - 1]){
                nums[finger2] = duplicate
                finger2++
            }

        }

        return finger2
    }
}
