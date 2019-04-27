import { useCallback, useState } from 'react';

export function useDrawer() {
  const [openedDrawer, setOpenedDrawer] = useState(true);

  const toggleDrawer = useCallback(() => {
    setOpenedDrawer(!openedDrawer);
  }, [openedDrawer]);

  return { openedDrawer, toggleDrawer };
}
