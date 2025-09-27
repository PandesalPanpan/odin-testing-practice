import caesarCipher from "./caesar-cipher";

it('caesar function exist', () => {
    expect(typeof(caesarCipher)).toBe('function');
})

it("caesarCipher method cases", () => {
    caesarCipherCases = [
        {
            string: 'xyz',
            key: 3,
            expected: 'abc'
        },
        {
            string: 'HeLLo',
            key: 3,
            expected: 'KhOOr'
        },
        {
            string: 'Hello, World!',
            key: 3,
            expected: 'Khoor, Zruog!'
        }
    ]
    caesarCipherCases.forEach((item) => {
        expect(caesarCipher(item.string, item.key)).toMatch(item.expected);
    });

})