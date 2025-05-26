import React from 'react';

interface ColumnProps {
  title: string;
  children?: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ title, children }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Column;
