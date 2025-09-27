export default analyzeArray = (nums) => {
    const average = getAverage(nums);
    const min = getMin(nums);
    const max = getMax(nums);
    return {
        average,
        min,
        max,
        length: nums.length,
    }
}

const getAverage = (nums) => {
    let result = nums.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return result / nums.length;
}

const getMin = (nums) => {
    let currentMinimum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < currentMinimum) {
            currentMinimum = nums[i];
        }
    }

    return currentMinimum;
}

const getMax = (nums) => {
    let currentHighest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currentHighest < nums[i]) [
            currentHighest = nums[i]
        ]
    }
    return currentHighest;
}