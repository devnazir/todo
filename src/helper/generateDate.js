function date() {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  const time = new Date()
  const date = time.getDate()
  const month = time.getMonth()
  const year = time.getFullYear()

  return `${`${date} ${months[month]} ${year}`}`
}

export default date