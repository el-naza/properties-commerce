export default function formatNumber(num: number): string {
  if (num >= 1e12) return (num / 1e12).toFixed(1).replace(/\.0$/, '') + ' Trn'
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + ' Bln'
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + ' Mln'
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + ' Thd'
  return num.toString()
}
