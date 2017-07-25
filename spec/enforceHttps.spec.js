'use strict'

describe('Enforce Https', function() {
  var enforcer = require('../enforceHttps')

  describe('enforcer', function() {
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

    it('with https enforcer and no user input', function () {
      var expected = {}

      enforcer.enforce(app, https)

      expect(app.use).toHaveBeenCalled()
      expect(https).toHaveBeenCalledWith(expected)
    })

    it('with https enforcer and xProto is provided', function () {
      var expected = { trustProtoHeader: true }

      enforcer.enforce(app, https, 'xProto')

      expect(app.use).toHaveBeenCalled()
      expect(https).toHaveBeenCalledWith(expected)
    })

    it('with https enforcer and xArrSsl is provided', function () {
      var expected = { trustAzureHeader: true }

      enforcer.enforce(app, https, 'xArrSsl')

      expect(app.use).toHaveBeenCalled()
      expect(https).toHaveBeenCalledWith(expected)
    })

    it('with https enforcer and forwardedHost is provided', function () {
      var expected = { trustXForwardedHostHeader: true }

      enforcer.enforce(app, https, 'forwardedHost')

      expect(app.use).toHaveBeenCalled()
      expect(https).toHaveBeenCalledWith(expected)
    })

    it('with https enforcer and random is provided', function () {
      var expected = { }

      enforcer.enforce(app, https, 'adfadsf')

      expect(app.use).toHaveBeenCalled()
      expect(https).toHaveBeenCalledWith(expected)
    })
  })

  describe('shouldRedirect', function() {
    it('default with no user input', function () {
      var expected = false

      var actual = enforcer.shouldRedirect()

      expect(actual).toEqual(expected)
    })

    it('enforce with no user defined environment', function () {
      var expected = true

      var actual = enforcer.shouldRedirect(true, 'production')

      expect(actual).toEqual(expected)
    })

    it('enforce with undefined https', function () {
      var expected = false

      var actual = enforcer.shouldRedirect(undefined, 'production')

      expect(actual).toEqual(expected)
    })

    it('enforce with false https', function () {
      var expected = false

      var actual = enforcer.shouldRedirect(false, 'production')

      expect(actual).toEqual(expected)
    })

    it('enforce with user defined environments in production', function () {
      var expected = true

      var actual = enforcer.shouldRedirect(true, 'production', 'beta,staging')

      expect(actual).toEqual(expected)
    })

    it('enforce with user defined environments in staging', function () {
      var expected = true

      var actual = enforcer.shouldRedirect(true, 'staging', 'beta,staging')

      expect(actual).toEqual(expected)
    })
  })
})