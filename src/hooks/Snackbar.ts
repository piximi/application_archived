import { useCallback, useState } from 'react';

export function useSnackbar() {
  const [openedSnackbar, setOpenedSnackbar] = useState(false);

  const closeSnackbar = useCallback(() => {
    setOpenedSnackbar(false);
  }, []);

  const openSnackbar = useCallback(() => {
    setOpenedSnackbar(true);
  }, []);

  return { openedSnackbar, openSnackbar, closeSnackbar };
}
