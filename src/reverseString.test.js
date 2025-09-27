import reverseString from "./reverseString";

it('reverseString function exist', () => {
    expect(typeof reverseString).toBe('function');
})


it('multiple reverse strings', () => {
    const stringCases = [
        {
            input: 'retep',
            expected: 'peter'
        },
        {
            input: 'izabelle',
            expected: 'ellebazi'
        },
        {
            input: 'Kingever',
            expected: 'revegniK'
        }
    ]

    stringCases.forEach((item) => {
        expect(reverseString(item.input)).toBe(item.expected);
    })
})