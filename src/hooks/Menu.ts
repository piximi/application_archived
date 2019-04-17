import { useCallback, useState } from 'react';

export default function useMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openedMenu = Boolean(anchorEl);

  const openMenu = useCallback(
    event => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl]
  );

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  return { anchorEl, openedMenu, openMenu, closeMenu };
}
