import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_300x300.webp?x-expires=1663383600&x-signature=GjHDdmSoLEO2JkxUKZ7FbSG9XVM%3D"
                alt="Hoaaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
