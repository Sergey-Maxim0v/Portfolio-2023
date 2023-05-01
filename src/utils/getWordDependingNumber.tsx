export interface IGetWordDependingNumber {
    num: number | string,
    word_0: string,
    word_1: string,
    word_2: string,
    word_5: string
}

const getWordDependingNumber = ({num, word_0, word_1, word_2, word_5}: IGetWordDependingNumber) => {
    if(typeof num !== 'number'){
        return ''
    }

    const lastNum = +Math.floor(num).toString()[num.toString().length - 1]

    if (+lastNum === 0) {
        return word_0
    }

    if (+lastNum < 2) {
        return word_1
    }

    if (+lastNum < 5) {
        return word_2
    }

    return word_5
}

export default getWordDependingNumber