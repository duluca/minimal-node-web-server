var _ = require('lodash')

var checkProdEnvironment = function (nodeEnv, environmentsVar) {
  var environmentsToEnforce = ['production'] // default production variable

  if(environmentsVar) {
    environmentsToEnforce = environmentsToEnforce.concat(environmentsVar.split(','))
  }

  return _.includes(environmentsToEnforce, nodeEnv)
}

module.exports = {
  isProdEnvironment: checkProdEnvironment
}