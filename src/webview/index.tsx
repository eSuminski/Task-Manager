import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskManagerRoot from './Panel/components/TaskManagerRoot';
import './Panel/styles/TaskBoard.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<TaskManagerRoot />);
}
