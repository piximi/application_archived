import * as React from 'react';
import Dialog from '../../../components/Dialog/Dialog';
import DialogActions from '../../../components/DialogActions/DialogActions';
import DialogTitle from '../../../components/DialogTitle/DialogTitle';
import DialogContent from '../../../components/DialogContent/DialogContent';
import ColorIconButton from '../../../components/ColorIconButton/ColorIconButton';
import CategoryDescriptionTextField from '../../../components/CategoryDescriptionTextField/CategoryDescriptionTextField';

const EditCategoryDialog = (props: any) => {
  const { category, updateColor, updateDescription, onClose, open } = props;

  const [color, setColor] = React.useState<string>(category.color);

  const [description, setDescription] = React.useState<string>(
    category.description
  );

  const onAcceptance = () => {
    updateColor(category.identifier, color);

    updateDescription(category.identifier, description);

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
