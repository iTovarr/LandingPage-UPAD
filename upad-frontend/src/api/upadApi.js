const API_BASE = '/api/v1'

export async function registrarLead(leadData) {
  const response = await fetch(`${API_BASE}/preventa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Error de conexión' }))
    throw new Error(error.error || 'Error al registrar. Intenta de nuevo.')
  }

  return response.json()
}

export async function registrarEncuesta(encuestaData) {
  const response = await fetch(`${API_BASE}/encuesta`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(encuestaData),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Error de conexión' }))
    throw new Error(error.error || 'Error al enviar encuesta. Intenta de nuevo.')
  }

  return response.json()
}
