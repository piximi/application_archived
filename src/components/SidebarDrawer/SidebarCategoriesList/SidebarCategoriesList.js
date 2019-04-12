import React, { useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import Category from '../SidebarCategoryListItem/SidebarCategoryListItem';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateCategoryListItem from '../SidebarCreateCategoryListItem/SidebarCreateCategoryListItem';
import useCollapseList from '../../../hooks/CollapseList';
import * as _ from 'lodash';

function SidebarCategoriesList(props) {
  const { collapsedList, collapseList } = useCollapseList();

  const [
    createCategoryDialogToggled,
    setCreateCategoryDialogToggled
  ] = useState(0);

  const {
    categories,
    updateCategoryVisibility,
    setUnlabelledVisibility,
    displayThisCategoryOnly,
    connectDropTarget,
    images
  } = props;

  const sortedCategories = _.sortBy(categories, 'description');

  return (
    <React.Fragment>
      <List dense>
        <ListItem button onClick={collapseList}>
          <ListItemIcon>
            {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>

          <ListItemText inset primary="Categories" />
        </ListItem>

        <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
          {sortedCategories.map((category, index) => (
            <Category
              identifier={category.identifier}
              key={category.identifier}
              index={index}
              description={category.description}
              visible={category.visible}
              color={category.color}
              images={images}
              updateCategoryVisibility={updateCategoryVisibility}
              displayThisCategoryOnly={displayThisCategoryOnly}
              setUnlabelledVisibility={setUnlabelledVisibility}
              connectDropTarget={connectDropTarget}
              editCategory={() =>
                setCreateCategoryDialogToggled(!createCategoryDialogToggled)
              }
            />
          ))}

          <CreateCategoryListItem />
        </Collapse>
      </List>
    </React.Fragment>
  );
}

export default React.memo(SidebarCategoriesList);
