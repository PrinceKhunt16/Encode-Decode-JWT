const str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWUwYWExMGJkZGM3NTc3MjJlYWFhNyIsImlhdCI6MTY4Mzk0OTE0NCwiZXhwIjoxNjg0NTUzOTQ0fQ.sqa82WHG5kkRgQJHy1FXFi8xpLAMZiQYBa9jxOmysfg"
const hash = "mkczxkcnjghfiudjfoqieruq37498723rhyufjdsbjfcnsdkakdejqwi8w34671297346923423rhjedfhsdjfnabdiqhwr9iyfd9sfs8erjksjdf87s98df"

console.log('---------------------------------------')

console.log("encode")

function encode(string) {
    const hashdevider = [0, 4, 13, 24, 35, 44, 55, 66, 68, 78, 85, 88, 96, 99, 107]
    const stringdevider = [0, 2, 14, 21, 34, 45, 58, 62, 68, 72, 82, 88, 96, 99, 102]
    const hashparts = [], stringparts = [], superstring = [], devider = 15

    for (let i = 0; i < devider - 1; i++) {
        hashparts.push(hash.slice(hashdevider[i], hashdevider[i + 1]))
    }

    console.log(hashparts)

    for (let i = 0; i < devider; i++) {
        stringparts.push(string.slice(stringdevider[i], stringdevider[i + 1]))
    }

    console.log(stringparts)

    for (let i = 0, j = 0; i < devider * 2; i++) {
        i % 2 ? superstring.push(hashparts[j++]) : superstring.push(stringparts[j])
    }

    return superstring.join('')
}

console.log('---------------------------------------')

console.log(encode(str))

console.log('---------------------------------------')

console.log("decode")

function decode(string) {
    const hashdevider = [0, 4, 13, 24, 35, 44, 55, 66, 68, 78, 85, 88, 96, 99, 107]
    const stringdevider = [0, 2, 14, 21, 34, 45, 58, 62, 68, 72, 82, 88, 96, 99, 102]
    const superstring = [], devider = 15

    for (let i = 0, j = 0, k = 0; i <= devider && j <= devider && k < devider * 2; k++, k % 2 ? j++ : i++) {
        if (k % 2) {
            superstring.push(string.substring(hashdevider[i] + stringdevider[i], hashdevider[i] + (stringdevider[i + 1] ? stringdevider[i + 1] : string.length)))
        }
    }

    return superstring.join('')
}

console.log('---------------------------------------')

console.log(str)

console.log('---------------------------------------')

console.log(decode(encode(str)))

console.log('---------------------------------------')