'use strict'

describe('Enforce Https', function() {
  var enforcer = require('../enforceHttps')

  var app
  var https

  beforeEach(function() {
    app = jasmine.createSpyObj('app', ['use'])
    https = jasmine.createSpy('HTTPS')
  })

  it('default with no user input', function () {
    var expected = {}

    enforcer.enforce(app)

    expect(app.use).not.toHaveBeenCalled()
  })

  it('default with https enforcer and no user input', function () {
    var expected = {}

    enforcer.enforce(app, https)

    expect(app.use).toHaveBeenCalled()
    expect(https).toHaveBeenCalledWith(expected)
  })

  it('default with https enforcer and xProto is provided', function () {
    var expected = { trustProtoHeader: true }

    enforcer.enforce(app, https, true)

    expect(app.use).toHaveBeenCalled()
    expect(https).toHaveBeenCalledWith(expected)
  })

  it('default with https enforcer and xArrSsl is provided', function () {
    var expected = { trustAzureHeader: true }

    enforcer.enforce(app, https, undefined, true)

    expect(app.use).toHaveBeenCalled()
    expect(https).toHaveBeenCalledWith(expected)
  })

  it('default with https enforcer and forwardedHost is provided', function () {
    var expected = { trustXForwardedHostHeader: true }

    enforcer.enforce(app, https, undefined, undefined, true)

    expect(app.use).toHaveBeenCalled()
    expect(https).toHaveBeenCalledWith(expected)
  })

  it('default with https enforcer and all is provided', function () {
    var expected = { trustProtoHeader: true }

    enforcer.enforce(app, https, true, true, true)

    expect(app.use).toHaveBeenCalled()
    expect(https).toHaveBeenCalledWith(expected)
  })

})