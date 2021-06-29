const rixits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-"
const zeroschar = "~"

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
  } else {
    result += zeroschar
  }
  return result
}

export const decode = (id: string): number => {
  if (id.endsWith(zeroschar)) {
    id = id.substr(0, id.length - 1)
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
