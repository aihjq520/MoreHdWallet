import { HttpJsonRpcConnector, LotusClient } from 'filecoin.js'

;(async () => {
  const connector = new HttpJsonRpcConnector({
    url: 'https://204MuTYHViWva78WJvsZtFvOhzU:5179b22fe76fb37dbb5cdf68aa117881@filecoin.infura.io',
    token: '204MuTYHViWva78WJvsZtFvOhzU'
  })

  const jsonRpcProvider = new LotusClient(connector)
  const version = await jsonRpcProvider.common.version()
  console.log(version)
})()
  .then()
  .catch()
