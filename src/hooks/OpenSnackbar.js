import { useState } from 'react';

export default function useOpenSnackbar() {
  const [toggledSnackbar, setToggledSnackbar] = useState(false);

  const toggleSnackbar = () => {
    setToggledSnackbar(!toggledSnackbar);
  };

  return { toggledSnackbar, toggleSnackbar };
}
