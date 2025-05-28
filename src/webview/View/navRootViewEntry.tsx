import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { NavRoot } from './components/NavRoot';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<NavRoot />);
}
