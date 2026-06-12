class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a: string, b: string): string {
        let i = a.length - 1
        let j = b.length - 1

        let carry = 0
        let result = ''

        while(i >=0 || j >= 0|| carry > 0){
            let currentA = i >= 0 ? Number(a[i]) : 0
            let currentB = j >= 0 ? Number(b[j]) : 0
            let sum = currentA + currentB + carry
            carry = Math.floor(sum / 2)
            result = (sum % 2) + result
            
            i--
            j--        
            

            }
    return result
    }
}
