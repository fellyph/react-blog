import React, { FC } from 'react';

const Page: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <h1>Page</h1>
      <p>Page page content</p>
    </div>
  );
};

export default Page;
