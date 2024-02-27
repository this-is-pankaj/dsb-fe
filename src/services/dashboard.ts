const baseAPIURL = import.meta.env.VITE_BASE_API_URL
type ApiInfo = {
  method: string
  url: string
}
const apis: Record<string, ApiInfo> = {
  dataSets: {
    method: 'GET',
    url: `${baseAPIURL}/api/data-sets`
  }
}

export const makeCall = async (feature: string) => {
  try {
    const { method, url } = apis[feature]
    const response = await fetch(url, { method })
    const data = await response.json()
    return data
  } catch (exc) {
    console.log(exc)
    throw exc
  }
}
