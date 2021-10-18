const rixits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-"
const noQuadrupleZerosChar = "~"
const doubleZerosChar = "."

export const encode = (number: number): string => {
  if (number < 0) throw new Error("Id must be greater then or equal to 0")

  let residual = Math.floor(number)
  let result = ""
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const rixit = residual % 64
    result = rixits.charAt(rixit) + result
    residual = Math.floor(residual / 64)

    if (residual == 0) break
  }
  if (result.endsWith("0000")) {
    result = result.substr(0, result.length - 4)
  } else if (result.endsWith("00")) {
    result = result.substr(0, result.length - 2) + doubleZerosChar
  } else {
    result += noQuadrupleZerosChar
  }
  return result
}

export const decode = (id: string): number => {
  if (id.endsWith(noQuadrupleZerosChar)) {
    id = id.substr(0, id.length - 1)
  } else if (id.endsWith(doubleZerosChar)) {
    id = id.substr(0, id.length - 1) + "00"
  } else {
    id += "0000"
  }

  let result = 0
  const chars = id.split("")
  for (let e = 0; e < chars.length; e++) {
    result = result * 64 + rixits.indexOf(chars[e])
  }
  return result
}
