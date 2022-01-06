const isFirstPriority = (symbol: string): boolean => ['^'].includes(symbol);
const isSecondPriority = (symbol: string): boolean => ['*', '/'].includes(symbol);
const isThirdPriority = (symbol: string): boolean => ['+', '-'].includes(symbol);
const isFirstPriorityExist = (data: string[]): boolean => !!data.find(isFirstPriority);
const isSecondPriorityExist = (data: string[]): boolean => !!data.find(isSecondPriority);
const isOpenBracket = (symbol: string): boolean => symbol === '(';
const isCloseBracket = (symbol: string): boolean => symbol === ')';
const isEmpty = (data: string[]) => data.length === 0;

export {
  isThirdPriority,
  isSecondPriority,
  isFirstPriority,
  isFirstPriorityExist,
  isSecondPriorityExist,
  isOpenBracket,
  isCloseBracket,
  isEmpty,
};
