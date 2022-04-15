export const encode = (
  buffer: Buffer,
  alphabet = 'abcdefghijklmnopqrstuvwxyz234567'
) => {
  const length = buffer.byteLength
  const view = new Uint8Array(buffer)
  const padding = alphabet.indexOf('=') === alphabet.length - 1

  if (padding) {
    alphabet = alphabet.substring(0, alphabet.length - 2)
  }

  let bits = 0
  let value = 0
  let output = ''

  for (let i = 0; i < length; i++) {
    value = (value << 8) | view[i]
    bits += 8

    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 31]
  }

  if (padding) {
    while (output.length % 8 !== 0) {
      output += '='
    }
  }

  return output
}
