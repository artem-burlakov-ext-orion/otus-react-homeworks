import rlSync from 'readline-sync';

const inputAreaPrefix = '> ';
const outputAreaPrefix = 'Result:';
const outputErrorPrefix = 'Error:';

export const getInput = (): string => rlSync.question(inputAreaPrefix);

export const showResult = (value: number): void => console.log(outputAreaPrefix, value);

export const showError = (value: string | unknown): void => console.log(outputErrorPrefix, value);
