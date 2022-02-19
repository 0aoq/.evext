# EVEXT Encryption Protocol

EVEXT is a protocol for encrypting and decrypting data. It fills each character with a random amount of zero-width characters. This is done to prevent the data from being easily decrypted.

The amount of characters added for a single character is determined by the character's position in the alphabet. The alphabet should be randomized to prevent data from being easily decrypted.

## Usage

1. Create a `.env` file in the root directory of your project with the "CONTROL_ALPHABET" variable set to the alphabet you want to use. It must include all lowercase characters, all upercase characters, numbers 1-9, a space character, and any special characters you want to use.
2. Run `./scripts/install.ps1` to install the required dependencies from NPM.
3. Run `./scripts/test.ps1` to test the protocol.

<!-- ## Thanks To

Dependencies specified under the `dependencies` section of the package.json file are automatically installed. Other dependencies found under `./scripts/install.ps1` are installed manually. -->

## Notes

The EVEXT protocol is not designed to be used with source code, as it will make it useless to any programs that attempt to run the code after it has been encrypted. Source files with more than 1000 lines of code may be hard to open in a text editor after encryption.

*\- The ZBASE EVEXT Team*