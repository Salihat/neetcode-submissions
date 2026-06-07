class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const splittedS= s.split('')
        // const splittedT = t.split('')
        // const sortedS = splittedS.sort()
        // const sortedT = splittedT.sort()
        // const joinedS = sortedS.join('')
        // const joinedT = sortedT.join('')

        // if(joinedS === joinedT) {
        //     return true
        // } else {
        //     return false
        // }

        const table = {}
        const splittedS = s.split('')
        const splittedT = t.split('')

        if(splittedS.length !== splittedT.length){
            return false
        }

        for(let i = 0; i < splittedS.length; i++){
            table[splittedS[i]] = (table[splittedS[i]] || 0) + 1
        }

        for(let j = 0; j < splittedT.length; j++){
            if(table[splittedT[j]] == 0 || table[splittedT[j]] == undefined){
                return false
            }
            
            table[splittedT[j]] -= 1
        }
        return true
    }
}
