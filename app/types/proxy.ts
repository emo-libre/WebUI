

export type ProxyRequest = {
    id: string
    endpoint: string
    payload: string
    response: string
    timestamp: string
}

export type ProxyOverride = {
    id: string
    endpointLookup: string
    payloadLookup: string
    responseLookup: string
    responseOverride: string
}