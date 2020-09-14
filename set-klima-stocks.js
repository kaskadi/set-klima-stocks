module.exports.handler = async (event) => {
  const createBulkBody = require('./helpers/create-bulk-body.js')
  const setStocks = require('./helpers/set-es-stocks.js')
  return await setStocks(createBulkBody(event.detail.responsePayload.stocks))
    .then(res => {
      const { items, errors } = res.body
      const successes = items.filter(item => item.update.status === 200)
      const fails = items.filter(item => item.update.status !== 200)
      console.log(`Errors: ${errors}`)
      console.log(JSON.stringify(successes, null, 2))
      console.log(JSON.stringify(fails, null, 2))
      return res
    })
    .catch(err => {
      console.log(JSON.stringify(err, null, 2))
      return err
    })
}
