import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from '../Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return ( 
        <div className={cx('menu-header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('back-icon')} icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
     );
}

export default MenuHeader;