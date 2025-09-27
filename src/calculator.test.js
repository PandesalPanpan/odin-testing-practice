import Calculator from "./calculator";
it('Calculator class function exist', () => {
    expect(typeof Calculator).toBe('function');
})

const calculator = new Calculator();
it('instance of Calculator class', () => {
    expect(calculator instanceof Calculator).toBe(true);
})