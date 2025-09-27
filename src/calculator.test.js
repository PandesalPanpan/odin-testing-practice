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

it('add 5+10 = 15', () => {
    expect(calculator.add(5+10)).toBe(15);
})