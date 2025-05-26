import React from 'react';
import Column from './Column';

const TaskManagerRoot: React.FC = () => {
  return (
    <div className="task-manager-root task-board">
      <Column title="Backlog" />
      <Column title="In Progress" />
      <Column title="Finished" />
    </div>
  );
};

export default TaskManagerRoot;
