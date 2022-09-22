import classNames from 'classnames/bind';

import styles from './Footer.module.scss'

const cx= classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('links-container')}>
                <a className={cx('link')} href='#1' target='_blank'>About</a>
                <a className={cx('link')} href='#2' target='_blank'>Tiktok Browse</a>
                <a className={cx('link')} href='#3' target='_blank'>Newsroom</a>
                <a className={cx('link')} href='#4' target='_blank'>Contact</a>
                <a className={cx('link')} href='#5' target='_blank'>Careers</a>
                <a className={cx('link')} href='#6' target='_blank'>ByteDance</a>
            </div>
            <div className={cx('links-container')}>
                <a className={cx('link')} href='#7' target='_blank'>Tiktok for Good</a>
                <a className={cx('link')} href='#8' target='_blank'>Advertise</a>
                <a className={cx('link')} href='#9' target='_blank'>Developers</a>
                <a className={cx('link')} href='#10' target='_blank'>Transparency</a>
                <a className={cx('link')} href='#11' target='_blank'>TikTok Rewards</a>
            </div>
            <div className={cx('links-container')}>
                <a className={cx('link')} href='#12' target='_blank'>Help</a>
                <a className={cx('link')} href='#13' target='_blank'>Safety</a>
                <a className={cx('link')} href='#14' target='_blank'>Terms</a>
                <a className={cx('link')} href='#14' target='_blank'>Privacy</a>
                <a className={cx('link')} href='#15' target='_blank'>Creator Portal</a>
                <a className={cx('link')} href='#16' target='_blank'>Community Guidelines</a>
            </div>
            <span className={cx('copyright')}>© 2022 TikTok</span>
        </div>
     );
}

export default Footer;