import { useState } from 'react';

export default function useOpenDialog() {
  const [toggledDialog, setToggledDialog] = useState(false);

  const toggleDialog = () => {
    setToggledDialog(!toggledDialog);
  };

  return { toggledDialog, toggleDialog };
}
