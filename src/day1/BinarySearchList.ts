export default function bs_list(haystack: number[], needle: number): boolean {
    // haystack [1,5,9,15,21]
    // needle [15]

    let lo = 0
    let hi = haystack.length // 5
    
    do {
        let m = Math.floor(lo + (hi - lo) / 2) // 2
        let v = haystack[m] // 9

        if (v === needle) { // 9 = 15
            return true
        }
        else if (v > needle) { // 9 < 15
            hi = m
        }
        else if (v < needle) { // 9 > 15
            lo = m + 1
        } 
    } while (lo < hi) {
        return false
    }
}