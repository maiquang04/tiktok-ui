import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    PersonWithArrowIcon,
    UserGroupIcon,
    CompassIcon,
    LiveIcon,
    UserIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    CompassActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                ></MenuItem>
                {/* <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<PersonWithArrowIcon />}
                ></MenuItem> */}
                {/* <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<UserIcon />}
                ></MenuItem> */}
            </Menu>
        </aside>
    );
}

export default Sidebar;
