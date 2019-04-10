import React, { useCallback, useState } from 'react';

export default function useMenu() {
  const [anchorEl, setAnchorEl] = useState();

  const openedMenu = Boolean(anchorEl);

  const openMenu = useCallback(
    event => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl]
  );

  const closeMenu = useCallback(() => {
    setAnchorEl();
  }, [anchorEl]);

  return { anchorEl, openedMenu, openMenu, closeMenu };
}
