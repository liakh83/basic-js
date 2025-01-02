const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  isLetter(item) {
    return item.toUpperCase() !== item.toLowerCase();
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!');
    }
    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, false);
  }

  process (input, key, isEncrypt){
    const codeA = 'A'.charCodeAt(0);
    let result = '';
    let keyIndex = 0;
    const abcCount = 26;

    for (let i = 0; i < input.length; i += 1) {
      const item = input[i];
      if (this.isLetter(item)) {

        let itemIndex = item.toUpperCase().charCodeAt() - codeA;
        let shift = key.toUpperCase().charCodeAt([keyIndex % key.length]) - codeA;

        const newItemCode = isEncrypt
          ? (codeA + (itemIndex + shift) % abcCount)
          : (codeA + (itemIndex - shift + abcCount) % abcCount)
          
        result += String.fromCharCode(newItemCode)
        keyIndex += 1;
      } else {
        result += item;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
