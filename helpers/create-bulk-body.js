module.exports = (msgBody) => {
  const warehouse = 'klima'
  return getStockBulkBody(warehouse, msgBody).concat(getWarehouseBulkBody(warehouse))
}

function getStockBulkBody (warehouse, msgBody) {
  return msgBody.flatMap(getOpBodyDuplet(warehouse))
}

function getOpBodyDuplet (warehouse) {
  return product => {
    const op = {
      update: {
        _id: product.ean,
        _index: "products"
      }
    }
    var body = { doc: { stocks: {} } }
    body.doc.stocks[warehouse] = {
      quantity: product.quantity
    }
    return [op, body]
  }
}

function getWarehouseBulkBody (warehouse) {
  return [
    {
      update: {
        _id: warehouse,
        _index: "warehouses"
      }
    },
    {
      doc: {
        stockLastUpdated: Date.now()
      }
    }
  ]
}