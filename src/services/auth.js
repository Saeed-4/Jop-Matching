export async function getCurrentUser() {
  const token = localStorage.getItem('token')

  if (!token) return null

  try {
    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })

    const data = await response.json()

    if (!response.ok) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return null
    }

    localStorage.setItem('user', JSON.stringify(data.user))

    return data.user
  } catch (error) {
    console.error(error)
    return null
  }
}