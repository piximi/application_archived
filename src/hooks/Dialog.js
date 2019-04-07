import { useState } from 'react';

export default function useDialog() {
  const [toggledDialog, setToggledDialog] = useState(false);

  const toggleDialog = () => {
    setToggledDialog(!toggledDialog);
  };

  return { toggledDialog, toggleDialog };
}
