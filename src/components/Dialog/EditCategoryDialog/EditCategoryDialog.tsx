import * as React from 'react';
import Dialog from '../Dialog';
import DialogActions from '../../DialogActions/DialogActions';
import DialogTitle from '../../DialogTitle/DialogTitle';
import DialogContent from '../../DialogContent/DialogContent';
import ColorIconButton from '../../ColorIconButton/ColorIconButton';
import CategoryDescriptionTextField from '../../CategoryDescriptionTextField/CategoryDescriptionTextField';

const EditCategoryDialog = (props: any) => {
  const { category, updateColor, updateDescription, onClose, open } = props;

  const [color, setColor] = React.useState<string>(category.color);

  const [description, setDescription] = React.useState<string>(
    category.description
  );

  const onAcceptance = () => {
    updateColor(category.index, color);

    updateDescription(category.index, description);

    onClose();
  };

  const onColorChange = (color: any) => {
    setColor(color.hex);
  };

  const onDescriptionChange = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;

    setDescription(target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle title="Edit category" />

      <DialogContent>
        <ColorIconButton color={color} onColorChange={onColorChange} />

        <CategoryDescriptionTextField
          description={description}
          onDescriptionChange={onDescriptionChange}
        />
      </DialogContent>

      <DialogActions
        acceptanceTitle="Edit"
        cancellationTitle="Cancel"
        onAcceptance={onAcceptance}
        onCancellation={onClose}
      />
    </Dialog>
  );
};

export default EditCategoryDialog;
