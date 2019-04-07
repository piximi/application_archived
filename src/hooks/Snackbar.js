import { createContext, useCallback, useEffect, useState } from 'react';

const generateKey = (() => {
  let count = 0;

  return () => `${++count}`;
})();

const SnackbarContext = createContext({ openSnackbar, closeSnackbar });

export default function useSnackbar(component, props) {
  const context = useContext(SnackbarContext);

  const key = useMemo(generateKey, []);

  const snackbar = useMemo(() => component, props);

  const [openedSnackbar, setOpenedSnackbar] = useState(false);

  const closeSnackbar = useCallback(() => {
    setOpenedSnackbar(true);
  }, []);

  const openSnackbar = useCallback(() => {
    setOpenedSnackbar(true);
  }, []);

  useEffect(() => {
    if (openedSnackbar) {
      context.openSnackbar(key, snackbar);
    } else {
      context.closeSnackbar(key);
    }

    return () => {
      context.closeSnackbar(key);
    };
  }, [snackbar, openedSnackbar]);

  return { openSnackbar, closeSnackbar };
}
