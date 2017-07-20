var enforcer = function(app, httpsEnforcer, xProto, xArrSsl, forwardedHost) {
  var props = {}

  if(xProto === true) {
    props = { trustProtoHeader: true }
  } else if(xArrSsl === true) {
    props = { trustAzureHeader: true }
  } else if(forwardedHost === true) {
    props = { trustXForwardedHostHeader: true }
  }

  if(httpsEnforcer) {
    app.use(httpsEnforcer(props))
  }
}

module.exports = {
  enforce: enforcer
}