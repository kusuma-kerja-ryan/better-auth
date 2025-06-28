import { formatDistanceToNow, format } from 'date-fns'

const formatBlogDate = (dateString: string) => {
  const date = new Date(dateString)
  const diff = formatDistanceToNow(date, { addSuffix: true })

  // Misalnya jika dalam 1 menit, kita anggap "Baru saja"
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  const justNow = diffInSeconds < 60

  return {
    relative: justNow ? "Baru saja" : diff, 
    full: format(date, "d MMMM yyyy, HH:mm") + " WIB"
  }
}

export {
  formatBlogDate
}