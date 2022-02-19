# EVEXT Encryption Protocol

EVEXT is a protocol for encrypting and decrypting data. It fills each character with a random amount of zero-width characters. This is done to prevent the data from being easily decrypted.

The amount of characters added for a single character is determined by the character's position in the alphabet. The alphabet should be randomized to prevent data from being easily decrypted.

Run `./scripts/test.ps1` to test the protocol.

*\- The ZBASE EVEXT Team*