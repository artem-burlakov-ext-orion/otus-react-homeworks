import rlSync from 'readline-sync';

export default () => {
  const userName = rlSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};