import PropTypes from 'prop-types';
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

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
