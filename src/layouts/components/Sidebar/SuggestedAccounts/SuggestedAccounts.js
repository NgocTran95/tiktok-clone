import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, morebtn, nopreview }) {
    return (
        <div className={cx('suggest-account')}>
            <p className={cx('title')}>{title}</p>
            <AccountItem nopreview={nopreview}/>
            <AccountItem nopreview={nopreview}/>
            <AccountItem nopreview={nopreview}/>
            <AccountItem nopreview={nopreview}/>
            <AccountItem nopreview={nopreview}/>
            <p className={cx('more-btn')}>{morebtn}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    morebtn: PropTypes.string.isRequired,
    nopreview: PropTypes.bool
};

export default SuggestedAccounts;
