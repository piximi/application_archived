import { useCallback, useState } from 'react';

export default function useDrawer() {
  const [openedDrawer, setOpenedDrawer] = useState(true);

  const toggleDrawer = useCallback(() => {
    setOpenedDrawer(!openedDrawer);
  }, [openedDrawer]);

  return { openedDrawer, toggleDrawer };
}
