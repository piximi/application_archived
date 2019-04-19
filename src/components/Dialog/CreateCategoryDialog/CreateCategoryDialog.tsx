import * as React from 'react';
import DialogContent from '../../DialogContent/DialogContent';
import DialogActions from '../../DialogActions/DialogActions';
import DialogTitle from '../../DialogTitle/DialogTitle';
import ColorIconButton from '../../ColorIconButton/ColorIconButton';
import Dialog from '../Dialog';
import CategoryDescriptionTextField from '../../CategoryDescriptionTextField/CategoryDescriptionTextField';

const CreateCategoryDialog = (props: any) => {
  const { createCategory, open, onClose } = props;

  const [color, setColor] = React.useState('#00e676');
  const [description, setDescription] = React.useState('');

  const onDescriptionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  const onColorChange = (color: any) => {
    setColor(color.hex);
  };

  const onAcceptance = () => {
    createCategory(color, description);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle title={'Create a new category'} />

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
