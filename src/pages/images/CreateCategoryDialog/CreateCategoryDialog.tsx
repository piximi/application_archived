import * as React from 'react';
import DialogContent from '../../../components/DialogContent/DialogContent';
import DialogActions from '../../../components/DialogActions/DialogActions';
import DialogTitle from '../../../components/DialogTitle/DialogTitle';
import ColorIconButton from '../../../components/ColorIconButton/ColorIconButton';
import Dialog from '../../../components/Dialog/Dialog';
import CategoryDescriptionTextField from '../../../components/CategoryDescriptionTextField/CategoryDescriptionTextField';

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
