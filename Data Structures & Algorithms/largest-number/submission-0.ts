class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums: number[]): string {
        const sortedArray = nums.sort((a , b) => String(a) + String(b) > String(b) + String(a) ? -1 : 1)
        const mergedArray = sortedArray.join('')

        if(mergedArray[0] === '0'){
            return '0'
        } else {
            return mergedArray
        }
    }
}
