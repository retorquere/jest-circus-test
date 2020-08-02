function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { resolve(time) }, time)
  })
}

for (const test of [...Array(10).keys()]) {
  it(`does nothing ${test}`, async () => {
    console.log(`${test} start: ${new Date}`)
    await delay(1000)
    console.log(`${test} end: ${new Date}`)
    return true
  })
}
