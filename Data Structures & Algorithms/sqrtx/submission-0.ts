class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        let low = 0
        let high = x
        let result = 0

        while(low <= high) {
            let mid = Math.floor((low + high) / 2)

            if((mid * mid) > x) {
                high = mid - 1
            } else {
                result = mid
                low = mid + 1
            }
        }

        return result
    }
}
