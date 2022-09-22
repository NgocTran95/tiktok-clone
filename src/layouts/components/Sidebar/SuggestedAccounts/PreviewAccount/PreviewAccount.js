import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './PreviewAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function PreviewAccount() {
    return (
        <PopperWrapper>
            <div className={cx('wrapper')}>
                <div className={cx('head')}>
                    <Image
                        className={cx('image')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cccc77c366c4ace26eea507b8b52b9d1.jpeg?x-expires=1663851600&x-signature=guYfdqF2nlYF%2FLXBtngKPmlSjRU%3D"
                        alt=""
                    />
                    <button className={cx('follow-btn')}>Follow</button>
                </div>
                <h4 className={cx('name')}>
                    hoshiphan
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('desc')}>Hoshi Phan</p>
                <p className={cx('stats')}>
                    <span className={cx('value')}>7.3M</span>
                    <span className={cx('type')}>Followers</span>
                    <span className={cx('value')}>489.5M</span>
                    <span className={cx('type')}>Likes</span>
                </p>
            </div>
        </PopperWrapper>
    );
}

export default PreviewAccount;
