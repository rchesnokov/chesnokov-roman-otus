const isEveryNumber = (args) => args.every(n => typeof n === 'number')

const checkArgsLength = (args) => {
  if (args.length === 0) {
    console.error('You must provide arguments!')
    return process.exit(-1)
  }

  return true
}

const checkArgsType = (args) => {
  if (!isEveryNumber(args)) {
    console.error('You must provide numbers!')
    return process.exit(-1)
  }

  return true
}

module.exports = {
  checkArgsLength,
  checkArgsType
}
