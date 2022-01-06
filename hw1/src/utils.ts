const isThirdPriority = (symbol: string): boolean => ['+', '-'].includes(symbol);
const isSecondPriority = (symbol: string): boolean => ['*', '/'].includes(symbol);
const isSecondPriorityExist = (data: string[]): boolean => !!data.find(isSecondPriority); 
const isOpenBracket = (symbol: string): boolean => symbol === '(';
const isCloseBracket = (symbol: string): boolean => symbol === ')';
const isEmpty = (data: string[]) => data.length === 0;

export {
  isThirdPriority,
  isSecondPriority,
  isSecondPriorityExist,
  isOpenBracket,
  isCloseBracket,
  isEmpty,
};
