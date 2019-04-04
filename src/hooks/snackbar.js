import { useState } from 'react';

export default function useSnackbar() {
  const [openedSnackbar, setOpenedSnackbar] = useState(false);

  const openSnackbar = () => {
    setOpenedSnackbar(!openedSnackbar);
  };

  return { openedSnackbar, openSnackbar };
}
