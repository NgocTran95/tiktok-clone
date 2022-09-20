import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    SettingIcon,
    CoinIcon,
    ProfileIcon,
    KeyboardIcon,
    FeedbackIcon,
    LanguageIcon,
    LogoutIcon,
    UploadIcon,
    MessageIcon,
    InboxIcon,
    HeaderMenuIcon,
} from '~/components/Icons';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italy)',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Español',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const CURRENT_USER_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    let currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={config.routes.home}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<UploadIcon />}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('message')}>
                                    <MessageIcon width="26px" height="26px" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('inbox')}>
                                    <InboxIcon width="32px" height="32px" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Login</Button>
                    )}
                    <Menu items={currentUser ? CURRENT_USER_ITEMS : MENU_ITEMS} hideOnClick onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_300x300.webp?x-expires=1663383600&x-signature=GjHDdmSoLEO2JkxUKZ7FbSG9XVM%3D"
                                alt="user-img"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('help-menu')}>
                                <HeaderMenuIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
