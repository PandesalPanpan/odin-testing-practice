import Calculator from "./calculator";
it('Calculator class function exist', () => {
    expect(typeof Calculator).toBe('function');
})

it('instance of Calculator class', () => {
    var calculator = new Calculator();
    expect(calculator instanceof Calculator).toBe(true);
})