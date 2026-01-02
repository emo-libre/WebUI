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

  const createOverride = async (endpointLookup: string, payloadLookup: string, responseLookup: string, responseOverride: string) => {
    const { data, error } = await useFetch('http://localhost:8080/proxy-api/overrides', {
      method: 'POST',
      body: {
        endpointLookup,
        payloadLookup,
        responseLookup,
        responseOverride,
      },
    })
    if (error.value) {
      console.error('Error creating override:', error.value)
      return null
    }
    return data.value as ProxyOverride
  }
  const getAllOverrides = async () => {
    const { data, error } = await useFetch('http://localhost:8080/proxy-api/overrides', {
      method: 'GET',
    })
    if (error.value) {
      console.error('Error fetching overrides:', error.value)
      return []
    }
    console.log("data.value", data.value);
    return data.value.map((item: any) => {
      return {
        id: item.id,
        endpointLookup: item.endpoint_lookup,
        payloadLookup: item.payload_lookup,
        responseLookup: item.response_lookup,
        responseOverride: item.response_override,
      } as ProxyOverride
    });
  }

  return {
    getAllRequests,
    createOverride,
    getAllOverrides,
  }
}
