
const keepalive = (request, response) => { 
  response.status(200).json({message: "I'm alive"})
}

module.exports = {keepalive}