export function formatDate(dateInput: string | undefined) {
  if (!dateInput) {
    return 'missing date'
  }
  const date = new Date(dateInput)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
}
