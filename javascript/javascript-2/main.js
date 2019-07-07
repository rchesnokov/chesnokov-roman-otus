const fn1 = () => {
  console.log('fn1')
  return Promise.resolve(2)
}

const fn2 = () =>
  new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
  })

const reducer = (memo, value) => {
  console.log('reduce')
  return memo * value
}

/*
 * ES6 version
 */
function promiseReduce (asyncFunctions, reduce, initialValue) {
  if (!asyncFunctions.length) {
    return initialValue
  }

  const firstFn = asyncFunctions.shift()
  const promise = firstFn()

  return promise
    .then((resFn) => {
      const result = reduce(initialValue, resFn)

      if (!asyncFunctions.length) {
        return Promise.resolve(result)
      } else {
        return promiseReduce(asyncFunctions, reduce, result)
      }
    })
}

/*
 * ES8 version
 */
async function promiseReduceES8 (asyncFunctions, reduce, initialValue) {
  let result = initialValue

  for (let fn of asyncFunctions) {
    const fnResult = await fn()
    result = reduce(result, fnResult)
  }

  return result
}

promiseReduce(
  [fn1, fn2],
  reducer,
  1
)
  .then(console.log)
