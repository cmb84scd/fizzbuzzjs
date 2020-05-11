describe('fizzbuzz', function() {
  it('returns fizz when number can be divided by 3', function() {
    expect(fizzbuzz(6)).toEqual('fizz')
  })
  it('returns buzz when number can be divided by 5', function() {
    expect(fizzbuzz(5)).toEqual('buzz')
  })
  it('returns fizzbuzz when number can be divided by 3 & 5', function() {
    expect(fizzbuzz(15)).toEqual('fizzbuzz')
  })
  it('returns the number otherwise', function() {
    expect(fizzbuzz(7)).toEqual(7)
  })
})
