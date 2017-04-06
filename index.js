const { send } = require('micro')

module.exports = async (req, res) => {
  const data = {}
  let statusCode = 200

  send(res, statusCode, data)
}
