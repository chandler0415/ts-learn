import * as React from 'react';
import './hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = ({name, enthusiasmLevel = 1}: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('wrong enthusiasmLevel');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;

const getExclamationMarks = (namChars: number) => Array(namChars + 1).join('!');