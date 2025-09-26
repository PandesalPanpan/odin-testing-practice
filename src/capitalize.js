export default capitalize = (string) => {
    // Refactor from duplication
    return string[0].toUpperCase() + string.slice(1);
}