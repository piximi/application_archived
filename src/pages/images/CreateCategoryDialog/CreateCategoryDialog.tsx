import * as React from 'react';
import {
  CategoryDescriptionTextField,
  ColorIconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog
} from '@cytoai/components';

const CreateCategoryDialog = (props: any) => {
  const { createCategory, open, onClose } = props;

  const [color, setColor] = React.useState<string>('#00e676');
  const [description, setDescription] = React.useState<string>('');

  const onAcceptance = () => {
    createCategory(color, description);

    onClose();
  };

  const onColorChange = (color: any) => {
    setColor(color.hex);
  };

  const onDescriptionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle title="Create a new category" />

      <DialogContent>
        <ColorIconButton color={color} onColorChange={onColorChange} />

        <CategoryDescriptionTextField
          description={description}
          onDescriptionChange={onDescriptionChange}
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle="Create"
        cancellationTitle="Cancel"
        onAcceptance={onAcceptance}
        onCancellation={onClose}
      />
    </Dialog>
  );
};

export default CreateCategoryDialog;
