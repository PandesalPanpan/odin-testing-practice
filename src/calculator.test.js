import Calculator from "./calculator";
it('Calculator class function exist', () => {
    expect(typeof Calculator).toBe('function');
})

const calculator = new Calculator();
it('instance of Calculator class', () => {
    expect(calculator instanceof Calculator).toBe(true);
})

it('add, subtract, divide, multiply exist', () => {
    expect(calculator.add).toBeDefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.divide).toBeDefined();
    expect(calculator.multiply).toBeDefined();
});

it('add method tests', () => {
    addCases = [
        {
            a: 5,
            b: 10,
            expected: 15,
        },
        {
            a: 25,
            b: 3028,
            expected: 3053,
        }
    ];

    addCases.forEach((item) => {
        expect(calculator.add(item.a, item.b)).toBe(item.expected);
    })
})

it('subtract method tests', () => {
    const subtractCases = [
        {
            a: 5,
            b: 10,
            expected: -5,
        },
        {
            a: 3028,
            b: 25,
            expected: 3003
        }
    ]

    subtractCases.forEach((item) => {
        expect(calculator.subtract(item.a, item.b)).toBe(item.expected);
    })
})

it('divide method tests', () => {
    const divideCases = [
        {
            a: 5,
            b: 3,
            expected: 1.67
        },
        {
            a: 5489,
            b: 34,
            expected: 161.44
        }
    ]

    divideCases.forEach((item) => {
        expect(calculator.divide(item.a, item.b)).toBeCloseTo(item.expected);
    })

})

it('multiply method test', () => {
    const multiplyCases = [
        {
            a: 5,
            b: 5,
            expected: 25
        },
        {
            a: 54,
            b: 349,
            expected: 18846
        }
    ]
    multiplyCases.forEach((item) => {
        expect(calculator.multiply(item.a, item.b)).toBe(item.expected);
    })
})