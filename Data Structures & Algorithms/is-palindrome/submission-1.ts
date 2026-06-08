class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const strToLowercase = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let pointer1 = 0
        let pointer2 = strToLowercase.length - 1

        while(pointer1 < pointer2) {
            if(strToLowercase[pointer1] !== strToLowercase[pointer2]){
                return false
            }
            pointer1++
                pointer2--
        }

        return true
    }
}
