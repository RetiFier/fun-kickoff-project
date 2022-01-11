import { useState } from 'react';
import { List, ListItemButton } from '@mui/material';

import { useHistory, useLocation } from 'react-router-dom';

interface Props {
  linkTo: string;
  linkText: string;
}

const ProfileLink = ({ linkTo, linkText }: Props): JSX.Element => {
  const [selectedLink, setSelectedLink] = useState(`/${linkTo}`);
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, linkTo: string) => {
    const link = `/${linkTo}`;
    setSelectedLink(link);
    history.push(link);
  };
  return (
    <List>
      <ListItemButton
        // underline="none"
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: 'gray',
        }}
        // color="gray"
        selected={selectedLink === location.pathname}
        onClick={(event) => handleListItemClick(event, linkTo)}
      >
        {linkText}
      </ListItemButton>
    </List>
  );
};

export default ProfileLink;
