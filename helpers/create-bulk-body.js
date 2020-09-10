module.exports = (stocks) => {
  const warehouse = 'klima'
  return getStockBulkBody(warehouse, stocks).concat(getWarehouseBulkBody(warehouse))
}

function getStockBulkBody (warehouse, stocks) {
  return stocks.flatMap(getOpBodyDuplet(warehouse))
}

function getOpBodyDuplet (warehouse) {
  return product => {
    const op = {
      update: {
        _id: product.ean,
        _index: 'products'
      }
    }
    var body = { doc: { stocks: {} } }
    body.doc.stocks[warehouse] = [{
      quantity: product.quantity
    }]
    return [op, body]
  }
}

function getWarehouseBulkBody (warehouse) {
  return [
    {
      update: {
        _id: warehouse,
        _index: 'warehouses'
      }
    },
    {
      doc: {
        stockLastUpdated: Date.now()
      }
    }
  ]
}
