
/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * @example
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * @param s 
 * @returns 
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0

  let left: number = 0
  let max: number = 0

  const map: Map<string, number> = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      left = Math.max(left, (map.get(s.charAt(i)) || 0) + 1)
    }
    map.set(s.charAt(i), i)
    max = Math.max(max, i - left + 1)
  }

  return max
}