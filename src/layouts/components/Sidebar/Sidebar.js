import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, GroupIcon, GroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>} end/>
                <MenuItem title="Following" to={config.routes.following} icon={<GroupIcon/>} activeIcon={<GroupActiveIcon/>} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>} />
            </Menu>
            <SuggestedAccounts title='Suggested accounts' morebtn='See all'/>
            <SuggestedAccounts title='Following accounts' morebtn='See more'/>
        </aside>
    );
}

export default Sidebar;
