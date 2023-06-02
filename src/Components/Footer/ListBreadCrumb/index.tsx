import React from 'react';

interface IndexProps {
  classname?: string;
}

const Index: React.FC<IndexProps> = (props) => {
  return (
    <div className={`Footer__ListBreadCrumb ${props.classname ? props.classname : ''}`}>
      <p>Home</p>
    </div>
  );
}

export default Index;
