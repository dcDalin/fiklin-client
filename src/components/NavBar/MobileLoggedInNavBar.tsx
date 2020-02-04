import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Menu, Icon } from 'semantic-ui-react';
import getWidth from '../../utils/getWidth';
import ActiveNavContext from '../../context/ActiveNavContext/activeNavContext';
import * as routes from '../../Routes';
import MobileFooterNav from './MobileFooterNav';
import UserAvatarDropdown from './UserAvatarDropdown';
import styles from './NavBar.module.scss';

export interface Props {
  children: React.ReactNode;
}

const MobileLoggedInNavBar: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const { activeItem, handleItemClick, visible, toggleVisible }: any = useContext(ActiveNavContext);
  console.log('Active Item is: ', activeItem);
  return (
    <>
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Menu fixed="top" secondary className={styles.mobileMenu} size="huge">
          <Menu.Item as={Link} to={routes.HOME} active={activeItem === 'home'} onClick={handleItemClick}>
            <span className={styles.logoText}>Fiklin</span>
          </Menu.Item>
          <Menu.Item position="right" className={styles.menuItem}>
            {activeItem && activeItem.includes('dashboard') ? (
              <Menu.Item onClick={toggleVisible} style={{ padding: '0px' }}>
                <Icon name={visible ? 'close' : 'bars'} size="large" style={{ margin: 'auto' }} />
              </Menu.Item>
            ) : null}
            <Menu.Item className={styles.menuItem} style={{ paddingRight: '0px', paddingLeft: '0px' }}>
              <UserAvatarDropdown />
            </Menu.Item>
          </Menu.Item>
        </Menu>
        <div style={{ marginTop: '40px' }}>{children}</div>
      </Responsive>
      <MobileFooterNav />
    </>
  );
};

export default MobileLoggedInNavBar;
