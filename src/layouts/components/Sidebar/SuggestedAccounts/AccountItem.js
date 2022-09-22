import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import PreviewAccount from './PreviewAccount';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ nopreview }) {
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                onShow={nopreview}
                interactive
                placement="bottom"
                delay={[800, 0]}
                offset={[-80, 0]}
                render={(attrs) => (
                    <div className="preview" tabIndex="-1" {...attrs}>
                        <PreviewAccount />
                    </div>
                )}
            >
                <Link className={cx('account-item')} to={`@hoshiphan`}>
                    <Image
                        className={cx('image')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cccc77c366c4ace26eea507b8b52b9d1.jpeg?x-expires=1663851600&x-signature=guYfdqF2nlYF%2FLXBtngKPmlSjRU%3D"
                        alt=""
                    />
                    <div className={cx('infor')}>
                        <h4 className={cx('name')}>
                            hoshiphan
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('desc')}>Hoshi Phan</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    nopreview: PropTypes.bool
};

export default AccountItem;
