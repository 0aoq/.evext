# EVEXT Encryption Protocol

EVEXT is a protocol for encrypting and decrypting data. It fills each character with a random amount of zero-width characters. This is done to prevent the data from being easily decrypted.

The amount of characters added for a single character is determined by the character's position in the alphabet. The alphabet should be randomized to prevent data from being easily decrypted.

## Usage

1. Run `./scripts/install.ps1` to install the required dependencies from NPM.
2. Run `./scripts/test.ps1` to test the protocol.

<!-- ## Thanks To

Dependencies specified under the `dependencies` section of the package.json file are automatically installed. Other dependencies found under `./scripts/install.ps1` are installed manually. -->

## Notes

The EVEXT protocol is not designed to be used in open-sourcel libraries, as it is fully closed-source itself. The only files to be distributed are ones under the `package/build/` directory.

*\- The ZBASE EVEXT Team*