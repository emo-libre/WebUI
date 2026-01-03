export const useProxyApi = () => {
  
  const getAllRequests = async () => {
    const { data, error } = await useFetch('http://localhost:8080/proxy-api/requests', {
      method: 'GET',
    })
    if (error.value) {
      console.error('Error fetching requests:', error.value)
      return []
    }
    return data.value as ProxyRequest[]
  }

  return {
    getAllRequests,
  }
}
