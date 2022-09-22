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
    UploadIcon,
    MessageIcon,
    InboxIcon,
    HeaderMenuIcon,
} from '~/components/Icons';
import Search from '../Search';
import config from '~/config';
import { MENU_ITEMS, CURRENT_USER_ITEMS, currentUser} from '~/components/Constants'

const cx = classNames.bind(styles);

function Header() {

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
                                    <sup className={cx('notify')}>12</sup>
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
