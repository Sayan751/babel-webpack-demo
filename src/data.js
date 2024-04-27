const testVarOne = `
Hello this is test var one
`

const testVarTwo = `
${testVarOne}

Hello this is test var two
`

const testObj = {
  one: `${testVarOne}`,
  two: `${testVarOne}`,
}

export {
  testVarTwo,
  testObj,
}