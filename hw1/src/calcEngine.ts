import { getInput, showResult, showError } from './handleInputOutput';
import calculate from './calculate';

export default (): void => {
  while (true) {
    try {
      const input = getInput();
      const result = calculate(input);
      showResult(result);
    } catch ({ message }) {
      showError(message);
    }
  }
};
