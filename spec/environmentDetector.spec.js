'use strict'

describe('Check Environment', function() {
  var environmentDetector = require('../environmentDetector')

  describe('isProdEnvironment', function () {
    it('default with no user input', function () {

      var nodeEnv = 'production'
      //var environments = undefined

      var expected = true

      var result = environmentDetector.isProdEnvironment(nodeEnv, undefined)

      expect(expected).toEqual(result)
    })

    it('user input production twice', function () {

      var nodeEnv = 'production'
      var environments = 'production'

      var expected = true

      var result = environmentDetector.isProdEnvironment(nodeEnv, environments)

      expect(expected).toEqual(result)
    })

    it('user provides multiple environments with nodeEnv set to production', function () {

      var nodeEnv = 'production'
      var environments = 'staging,beta'

      var expected = true

      var result = environmentDetector.isProdEnvironment(nodeEnv, environments)

      expect(expected).toEqual(result)
    })

    it('user provides multiple environments with nodeEnv set to staging', function () {

      var nodeEnv = 'staging'
      var environments = 'staging,beta'

      var expected = true

      var result = environmentDetector.isProdEnvironment(nodeEnv, environments)

      expect(expected).toEqual(result)
    })

    it('user provides multiple environments with nodeEnv set to beta', function () {

      var nodeEnv = 'beta'
      var environments = 'staging,beta'

      var expected = true

      var result = environmentDetector.isProdEnvironment(nodeEnv, environments)

      expect(expected).toEqual(result)
    })

    it('user provides multiple environments with nodeEnv set to local', function () {

      var nodeEnv = 'local'
      var environments = 'staging,beta'

      var expected = false

      var result = environmentDetector.isProdEnvironment(nodeEnv, environments)

      expect(expected).toEqual(result)
    })

    it('user overrides node env with no furhter input', function () {

      var nodeEnv = 'debug'
      //var environments = undefined

      var expected = false

      var result = environmentDetector.isProdEnvironment(nodeEnv, undefined)

      expect(expected).toEqual(result)
    })

    it('user overrides node env and provides production', function () {

      var nodeEnv = 'debug'
      var environments = 'production'

      var expected = false

      var result = environmentDetector.isProdEnvironment(nodeEnv, undefined)

      expect(expected).toEqual(result)
    })
  })

})