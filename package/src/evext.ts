// EVALUATED TERMINATION

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------- BEGIN FILE -----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// imports
const fs = require('fs')
require("dotenv").config() // load .env file

// key containing every character than can be used in a random order - ruins the point of the encryption if it's compromised
const encodingRuleset = process.env.CONTROL_ALPHABET

// ---------------------------------------------------------------------------------------------------------------------
// --------------------------------------------- FUNCTION DEFINITIONS --------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// encoding
export function encodeString(string: string): string {
    // for each character in the string, get the character's index in the encoding ruleset and then add that many zero-width spaces to the encoded string

    let encodedString = ""

    for (let i = 0; i < string.length; i++) {
        let index = encodingRuleset.indexOf(string[i]) + 1

        let zeroWidthSpaces = ""
        for (let j = 0; j < index; j++) {
            zeroWidthSpaces += "\u200B"
        }

        encodedString += zeroWidthSpaces + "."
    }

    return encodedString
}

export function encodeFile(filePath: string): string {
    // read file
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // encode file
    return encodeString(fileContents)
}

// decoding
export function decodeString(string: string): string {
    // for each group in the string (separated by .) get the index of the group and then the index of the character in the encoding ruleset and then add it to the decoded string

    let decodedString = ""

    for (let group of string.split(".")) {
        let index = group.length - 1
        decodedString += encodingRuleset.charAt(index)
    }

    return decodedString
}

export function decodeFile(filePath: string): string {
    // read file
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // decode file
    return decodeString(fileContents)
}

// ---------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- CLI FUNCTIONS ----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// get arguments
const args = process.argv.slice(2)

// check arguments
if (args.length !== 2) {
    console.log('Usage: node evext.js <encode|decode> <file>')
    process.exit(1)
}

// check mode
let mode = ""
if (args[0] === 'encode') {
    mode = 'encode'
} else if (args[0] === 'decode') {
    mode = 'decode'
} else {
    console.log('Usage: node evext.js <encode|decode> <file>')
    process.exit(1)
}

// check file
if (!fs.existsSync(args[1])) {
    console.log('Usage: node evext.js <encode|decode> <file>')
    process.exit(1)
} else {
    // run the function
    if (mode === 'encode') {
        const result = encodeFile(args[1])
        // write to file
        fs.writeFileSync(args[1] + '.enc', result)
    } else {
        // if args[1] doesn't end with .enc, add it
        if (!args[1].endsWith('.enc')) {
            args[1] = args[1] + '.enc'
        }

        // read file
        const result = decodeFile(args[1])
        // write to file
        fs.writeFileSync(args[1].replace('.enc', ''), result)
        // remove the .enc file
        // fs.unlinkSync(args[1])
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- END OF FILE ------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

export default {
    encodeString,
    encodeFile,
    decodeString,
    decodeFile,
}