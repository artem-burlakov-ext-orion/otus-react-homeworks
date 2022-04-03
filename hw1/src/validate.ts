import {
  isOpenBracket,
  isCloseBracket,
  isEmpty,
} from './utils';

const validOperators = ['+', '-', '*', '/', '^', '(', ')'];

const isBalanced = (data: string[]): boolean => {
  let stack: string[] = [];
  data.forEach((symbol: string): void => {
    if (isOpenBracket(symbol) || (isCloseBracket(symbol) && !isOpenBracket(stack[stack.length - 1]))) {
      stack = [...stack, symbol];
    }
    if (isCloseBracket(symbol) && isOpenBracket(stack[stack.length - 1])) {
      stack = stack.slice(0, stack.length - 1);
    }
  });
  return isEmpty(stack);
};

export default (symbols: string[]): void | never => {
  if (symbols.some((symbol) => symbol.length > 1 && isNaN(Number(symbol)))) {
    throw new Error('Should use spaces between input elements');
  }
  console.log(symbols)
  if (symbols.some((symbol) => !validOperators.includes(symbol) && isNaN(Number(symbol)))) {
    throw new Error('Invalid input data');
  }
  if (!isBalanced(symbols)) {
    throw new Error('Count of close brackets should be the same count of open brackets');
  }
};
