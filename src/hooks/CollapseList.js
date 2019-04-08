import { useState } from 'react';

export default function useCollapseList() {
  const [collapsed, setCollapsed] = useState(false);

  const collapse = () => {
    setCollapsed(!collapsed);
  };

  return { collapsed, collapse };
}
