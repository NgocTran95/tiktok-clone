import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image className={cx('image')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cccc77c366c4ace26eea507b8b52b9d1.jpeg?x-expires=1663851600&x-signature=guYfdqF2nlYF%2FLXBtngKPmlSjRU%3D" alt=''/>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    hoshiphan
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('desc')}>Hoshi Phan</p>
            </div>
        </div>
    );
}

// AccountItem.propTypes = {

// };

export default AccountItem;
