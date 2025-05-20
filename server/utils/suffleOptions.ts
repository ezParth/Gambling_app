import generateRandomNumber from "./generateRandomNumber"

const suffleOptions = (options: Array<any>): Array<any> => {
    let randomNumebr = generateRandomNumber(3);
    let newOptions: Array<any> = []
    for(let i=0; i<=3; i++) {
        newOptions.push(options[randomNumebr]);
        randomNumebr++;
        randomNumebr % 4;
    }
    return newOptions
}

export default suffleOptions