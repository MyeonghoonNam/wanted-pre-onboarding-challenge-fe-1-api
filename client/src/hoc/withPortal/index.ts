import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { Props } from './types';

const Portal = ({ children }: Props) => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.getElementById('modal-root'));
  }, []);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal(children, root);
};

export default Portal;
