import { useState } from 'react';

export function useCollapseList() {
  const [collapsedList, setCollapsedList] = useState(false);

  const collapseList = () => {
    setCollapsedList(!collapsedList);
  };

  return { collapsedList, collapseList };
}
