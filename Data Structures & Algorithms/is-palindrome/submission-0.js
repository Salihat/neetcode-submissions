class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const palidrome = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        const removeSigns = palidrome.split('').reverse().join('')

        if(removeSigns === palidrome) {
            return true
        } else {
            return false
        }
    }
}