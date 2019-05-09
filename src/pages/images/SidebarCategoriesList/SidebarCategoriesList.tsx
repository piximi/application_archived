import * as React from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SidebarCreateCategoryListItem } from '..';
import { useCollapseList } from '../../../hooks';
import * as _ from 'lodash';
import { ConnectedSidebarCategoryListItem } from '../../../containers';
import { useTranslation } from 'react-i18next';

const SidebarCategoriesList = (props: any) => {
  const { collapsedList, collapseList } = useCollapseList();

  const { t: translation } = useTranslation();

  const { categories, connectDropTarget } = props;

  const [unknown, known] = _.partition(categories, category => {
    if (category.identifier === '00000000-0000-0000-0000-000000000000') {
      return category;
    }
  });

  let sortedCategories = _.concat(_.sortBy(known, 'description'), unknown);

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText inset primary={translation('Categories')} />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        {sortedCategories.map((category, index) => (
          <ConnectedSidebarCategoryListItem
            category={category}
            key={category.identifier}
            index={index}
            connectDropTarget={connectDropTarget}
          />
        ))}

        <SidebarCreateCategoryListItem />
      </Collapse>
    </List>
  );
};

export default SidebarCategoriesList;
