import React, { FC } from 'react';

const Home: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <h1>Home</h1>
      <p>Home page content</p>
    </div>
  );
};

export default Home;
