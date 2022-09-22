import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Discover.module.scss'

const cx = classNames.bind(styles)


function DiscoverItem({type, content, icon}) {
    return ( 
        <Link className={cx('discover-item')} to={`${type}`}>
            <div className={cx('wrapper')}>
                {icon}
                <span className={cx('content')}>{content}</span>
            </div>
        </Link>
    );
}

DiscoverItem.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default DiscoverItem;
