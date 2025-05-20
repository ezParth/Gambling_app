const generateRandomNumber = (limit: number): number => {
    let val: number = Date.now();
    for (let i = 0; i < 100; i++) {
        val = val % limit;
        val += Date.now();
    }
    val = val % limit;
    return val;
};

export default generateRandomNumber;
