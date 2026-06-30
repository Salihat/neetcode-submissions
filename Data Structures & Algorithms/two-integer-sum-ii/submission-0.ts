class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let pointer1 = 0
        let pointer2 = numbers.length - 1

        while(pointer1 < pointer2) {
            let sum = numbers[pointer1] + numbers[pointer2]

            if(sum < target) {
                pointer1++
            } else if(sum > target) {
                pointer2--
            } else {
                return [pointer1 + 1, pointer2 + 1]
            }
        }
    }
}
