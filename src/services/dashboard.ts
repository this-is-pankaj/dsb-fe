import { mockedDataSets } from './mocks/data-sets.mock'

const baseURL = import.meta.env.BASE_URL
type ApiInfo = {
  method: string
  url: string
}
const apis: Record<string, ApiInfo> = {
  dataSets: {
    method: 'GET',
    url: `${baseURL}/api/data-sets`
  }
}

export const makeCall = async (feature: string) => {
  console.log('baseURL', baseURL)
  try {
    const { method, url } = apis[feature]
    const response = await fetch(url, { method })
    const data = await response.json()
    return data
  } catch (exc) {
    console.log(exc)
    // throw exc
    // Return mock data for the time being
    return mockedDataSets
  }
}
