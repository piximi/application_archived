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
import CreateCategoryListItem from '../SidebarCreateCategoryListItem/SidebarCreateCategoryListItem';
import useCollapseList from '../../../hooks/CollapseList';
import * as _ from 'lodash';
import ConnectedSidebarCategoryListItem from '../../../containers/ConnectedSidebarCategoryListItem';
import { useTranslation } from 'react-i18next';

const SidebarCategoriesList = props => {
  const { collapsedList, collapseList } = useCollapseList();

  const { t } = useTranslation();

  const { categories, connectDropTarget } = props;

  const sortedCategories = _.sortBy(categories, 'description');

  return (
    <React.Fragment>
      <List dense>
        <ListItem button onClick={collapseList}>
          <ListItemIcon>
            {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>

          <ListItemText inset primary={t('Categories')} />
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

          <CreateCategoryListItem />
        </Collapse>
      </List>
    </React.Fragment>
  );
};

export default SidebarCategoriesList;
