export function cutAtLength(str: string, maxCharCount: number) {
  return str.slice(0, maxCharCount - 1) + (str.length >= maxCharCount ? '…' : '')
}
