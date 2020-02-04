import React, { useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/authContext';
import ActiveNavContext from '../../../context/ActiveNavContext/activeNavContext';
import * as routes from '../../../Routes';
import DropDownTrigger from './DropDownTrigger';
import styles from './DropDown.module.scss';

const UserAvatarDropdown: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { activeItem, handleItemClick } = useContext(ActiveNavContext);
  const { username, displayName }: any = user;
  return (
    <Dropdown trigger={<DropDownTrigger />} className={styles.dropDown}>
      <Dropdown.Menu direction="left" className={styles.dropDownMenu}>
        <Dropdown.Header content={username ? username : displayName} />
        <Dropdown.Divider />
        <Dropdown.Item
          name="dashboard"
          text="Dashboard"
          as={Link}
          to={routes.DASHBOARD}
          active={activeItem === 'dashboard'}
          onClick={handleItemClick}
          className={styles.dropDownMenuItem}
        />
        <Dropdown.Item text="Log Out" as={Link} to={routes.LOGOUT} className={styles.dropDownMenuItem} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserAvatarDropdown;
