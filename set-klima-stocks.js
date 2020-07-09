module.exports.handler = async (event) => {
  const createBulkBody = require('./helpers/create-bulk-body.js')
  const setStocks = require('./helpers/set-es-stocks.js')
  return await setStocks(createBulkBody(JSON.parse(event.Records[0].body)))
  .then(res => {
    console.log(JSON.stringify(res, null, 2))
    return res
  })
  .catch(err => {
    console.log(JSON.stringify(err, null, 2))
    return err
  })
}
