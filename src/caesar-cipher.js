export default caesarCipher = (string, key) => {
    const alphabet = [
        'a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z'];
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();
        const index = alphabet.indexOf(char);
        let cipherChar = string[i];
        if (index !== -1) {
            cipherChar = alphabet[key+index] ?? alphabet[(key + index) - alphabet.length]
        }
        if (string[i] == string[i].toUpperCase()) {
            cipherChar = cipherChar.toUpperCase();
        }
        
        result += cipherChar;
    }
    return result;
}