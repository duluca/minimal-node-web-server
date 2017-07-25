var environmentDetector = require('./environmentDetector')

var enforcer = function(app, httpsEnforcer, httpsParameter) {
  var props = {}

  switch (httpsParameter && httpsParameter.toLowerCase()) {
    case 'xproto':
      props = { trustProtoHeader: true }
      break
    case 'xarrssl':
      props = { trustAzureHeader: true }
      break
    case 'forwardedhost':
      props = { trustXForwardedHostHeader: true }
      break
  }

  if(httpsEnforcer) {
    app.use(httpsEnforcer(props))
  }
}

var shouldRedirect = function(enforceHttps, nodeEnv, userProdEnvironments) {
  return (enforceHttps && environmentDetector.isProdEnvironment(nodeEnv, userProdEnvironments)) || false
}

module.exports = {
  enforce: enforcer,
  shouldRedirect: shouldRedirect
}