import analyzeArray from "./analyze-array";

it('analyzeArray function exist', () => {
    expect(typeof analyzeArray).toBe('function');
})

const object = analyzeArray([1,8,3,4,2,6]);
it('analyzeArray property define', () => {
    expect(object.average).toBeDefined();
    expect(object.min).toBeDefined();
    expect(object.max).toBeDefined();
    expect(object.length).toBeDefined();
})

it('analyzeArray property correct', () => {
    const objectCases = [
        {
            input: [1,8,3,4,2,6],
            expected: {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        },
        {
            input: [5,2,5,6,4],
            expected: {
                average: 4.4,
                min: 2,
                max: 6,
                length: 5
            }
        }
    ]

    objectCases.forEach((obj) => {
        const object = analyzeArray(obj.input);
        expect(object.average).toBeCloseTo(obj.expected.average);
        expect(object.min).toBe(obj.expected.min);
        expect(object.max).toBe(obj.expected.max);
        expect(object.length).toBe(obj.expected.length);
    });

})