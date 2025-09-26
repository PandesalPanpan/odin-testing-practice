import capitalize from "./capitalize.js";

it('exist capitalize', () => {
    expect(capitalize).toBeDefined();
})

it('should capitalize the first letter', () => {
    // How can I refactor this to not be duplicated
    const capitalizeCase = [
        {
            input: 'abc',
            expected: 'Abc'
        },
        {
            input: 'dbc',
            expected: 'Dbc'
        },
        {
            input: 'peter',
            expected: 'Peter'
        }
    ]

    capitalizeCase.forEach((obj) => {
        expect(capitalize(obj.input)).toBe(obj.expected);
    })
})