import React, { FC } from 'react';

const Menu: FC<React.AllHTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
