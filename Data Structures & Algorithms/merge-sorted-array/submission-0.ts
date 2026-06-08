class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        const removeZeros = nums1.splice(0, m)
        const mergeArray = [...removeZeros, ...nums2]

        for(let i = 0; i < mergeArray.length; i++) {
            let temp_value = mergeArray[i]

            let j = i - 1

            while(j >= 0 && mergeArray[j] > temp_value) {
                mergeArray[j + 1] = mergeArray[j]
                j--
            }
            mergeArray[j + 1] = temp_value
        }   
        for(let i = 0; i < mergeArray.length;i++) {
            nums1[i] = mergeArray[i]
        }
    }

}
