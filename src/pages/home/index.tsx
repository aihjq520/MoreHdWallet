import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    ;(async () => {
      const connector = new FilecoinJs.HttpJsonRpcConnector({
        url: 'https://204MuTYHViWva78WJvsZtFvOhzU:5179b22fe76fb37dbb5cdf68aa117881@filecoin.infura.io',
        token: '204MuTYHViWva78WJvsZtFvOhzU'
      })

      const jsonRpcProvider = new FilecoinJs.LotusClient(connector)
      const version = await jsonRpcProvider.common.version()
      console.log(version)
    })()
      .then()
      .catch()
  }, [])
  return <>home</>
}

export default Home
