import * as React from 'react';

interface Props {
  label?: string;
  className: string;
  onClick?: (data?) => void;
}

export const Button: React.StatelessComponent<Props> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};