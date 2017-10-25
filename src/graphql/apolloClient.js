import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'https://test1.jesseweigel.com/demo/graphql',
  opts: {
    credentials: 'include'
  }
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

networkInterface.useAfter([
  {
    applyAfterware ({ response }, next) {
      if (response.status === 401) {
        throw new Error('Unauthorized')
      }
      next()
    }
  }
])

export default client
