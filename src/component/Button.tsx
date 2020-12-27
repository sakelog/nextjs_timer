import React from 'react';

type ButtonProps = {
  children: any;
  className?: string;
  onClick?;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

const Button = (props: ButtonProps) => {
  var children = props.children,
    className = props.className,
    onClick = props.onClick,
    startIconProp = props.startIcon,
    endIconProp = props.endIcon;

  var startIcon = startIconProp && (
    <span className={className + '-startIcon'}>{startIconProp}</span>
  );
  var endIcon = endIconProp && (
    <span className={className + '-endIcon'}>{endIconProp}</span>
  );

  return (
    <span className={className} onClick={onClick}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </span>
  );
};

export default Button;
