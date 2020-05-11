describe('FizzBuzz', function() {
  var fizzBuzz
  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  })

  describe('multiples of 3', function() {
    it('returns fizz for number 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz')
    })
    it('returns fizz for number 6', function() {
      expect(fizzBuzz.play(6)).toEqual('fizz')
    })
  })

  describe('multiples of 5', function() {
    it('returns buzz for number 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz')
    })
    it('returns buzz for number 10', function() {
      expect(fizzBuzz.play(10)).toEqual('buzz')
    })
  })

  describe('multiples of 3 and 5', function() {
    it('returns fizzbuzz for number 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz')
    })
    it('returns fizzbuzz for number 30', function() {
      expect(fizzBuzz.play(30)).toEqual('fizzbuzz')
    })
  })

  it('returns the number otherwise', function() {
    expect(fizzBuzz.play(7)).toEqual(7)
  })
})
