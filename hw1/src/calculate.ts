import {
  isFirstPriority,
  isSecondPriority,
  isThirdPriority,
  isFirstPriorityExist,
  isSecondPriorityExist,
  isCloseBracket,
  isOpenBracket,
} from './utils';

import validate from './validate';

type CurrentStatementType = {
  first: number,
  second: number,
  operation: string
};

const getResultForTwoNumbers = (parsedObj: CurrentStatementType): string | never => {
  const { first, second, operation } = parsedObj;
  switch (operation) {
    case '+':
      return String(first + second);
    case '-':
      return String(first - second);
    case '*':
      return String(first * second);
    case '/':
      return String(first / second);
    case '^':
      return String(first ** second);
    default:
      throw new Error('This type of operation is not supported');
  }
};

const buildStatement = (data: string[], index: number): CurrentStatementType => {
  return {
    first: Number(data[index - 1]),
    second: Number(data[index + 1]),
    operation: data[index],
  };
};

const buildNewStatementData = (data: string[], index: number): string[] => {
  const currentStatementData = [...data];
  const currentStatement = buildStatement(currentStatementData, index);
  const currentResult = getResultForTwoNumbers(currentStatement);
  if (typeof currentResult === 'string') {
    currentStatementData.splice(index - 1, 3, currentResult);
  }
  return currentStatementData;
};

const getIndex = (data: string[]): number => {
  if (isFirstPriorityExist(data)) {
    return data.findIndex(isFirstPriority);
  }
  if (isSecondPriorityExist(data)) {
    return data.findIndex(isSecondPriority);
  }
  return data.findIndex(isThirdPriority);
};

const getResult = (elems: string[]): string => {
  let result = [...elems];
  while (result.length > 1) {
    const statementData = [...result];
    const index = getIndex(statementData);
    result = buildNewStatementData(statementData, index);
  }
  return result[0];
};

export default (data: string): number => {
  const symbols = data.trim().split(' ');
  validate(symbols);
  while (symbols.find(isOpenBracket)) {
    const closeBracketIndex = symbols.findIndex(isCloseBracket);
    const openBracketIndex = symbols.slice(0, closeBracketIndex).lastIndexOf('(');
    const bracketsData = symbols.slice(openBracketIndex + 1, closeBracketIndex);
    const bracketsResult = getResult(bracketsData);
    symbols.splice(openBracketIndex, bracketsData.length + 2, bracketsResult);
  }
  return Number(getResult(symbols));
};
