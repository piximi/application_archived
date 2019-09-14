import * as React from 'react';
import LabelIcon from '@material-ui/icons/Label';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import styles from './GalleryItemLabel.css';
import { IconButton } from '@material-ui/core';
import { ConnectedItemCategoryMenu } from '../../../containers';
import { makeStyles } from '@material-ui/styles';
import { useMenu } from '@piximi/hooks';
import { Image, Category, Score } from '@piximi/types';

const useStyles = makeStyles(styles);

const getLableIndex = (scores: Score[]) => {
  var maxScore = 0;
  var lableIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i].probability > maxScore) {
      maxScore = scores[i].probability;
      lableIndex = i;
    }
  }
  return scores[lableIndex].categoryIdentifier;
};

type GalleryItemLabelProps = {
  categories: Category[];
  image: Image;
};

export const GalleryItemLabel = (props: GalleryItemLabelProps) => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const { categories, image } = props;

  const classes = useStyles({});

  const predictedImage: boolean =
    image.categoryIdentifier === '00000000-0000-0000-0000-000000000000' &&
    image.scores.length !== 0;
  const predictedCategoryIdentifier: string = predictedImage
    ? getLableIndex(image.scores)
    : '00000000-0000-0000-0000-000000000000';

  const findCategoryColor = (categoryIdentifier: string) => {
    const index = categories.findIndex((category: any) => {
      return category.identifier === categoryIdentifier;
    });

    if (index > -1) {
      return categories[index].visualization.color;
    } else {
      return '#000';
    }
  };

  return (
    <React.Fragment>
      <IconButton
        aria-label="categorize"
        classes={{ root: classes.iconButton }}
        disableRipple
        onClick={openMenu}
      >
        {!predictedImage ? (
          <LabelIcon
            style={{ color: findCategoryColor(image.categoryIdentifier) }}
          />
        ) : (
          <LabelImportantIcon
            style={{ color: findCategoryColor(predictedCategoryIdentifier) }}
          />
        )}
      </IconButton>

      <ConnectedItemCategoryMenu
        anchorEl={anchorEl}
        image={image}
        onClose={closeMenu}
        open={openedMenu}
      />
    </React.Fragment>
  );
};
