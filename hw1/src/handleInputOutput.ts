import rlSync from 'readline-sync';

const inputAreaPrefix = '> ';
const outputAreaPrefix = 'Result:';
const outputErrorPrefix = 'Error:';

const getInput = (): string => rlSync.question(inputAreaPrefix);
const showResult = (value: number): void => console.log(outputAreaPrefix, value);
const showError = (value: string | unknown): void => console.log(outputErrorPrefix, value);

export {
  getInput,
  showResult,
  showError,
};
