class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashtable = {}

        for(let i = 0; i < strs.length; i++){
            let sortedStr = strs[i].split('').sort().join('')

            if(hashtable[sortedStr]) {
                hashtable[sortedStr].push(strs[i])
            } else {
                hashtable[sortedStr] = [strs[i]]
            }
        }

        return Object.values(hashtable)
    }
}
