import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
import { HashTagIcon, MusicToneIcon } from '~/components/Icons'

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('container')}>
            <h4 className={cx('header')}>Discover</h4>
            <div className={cx('body')}>
                <DiscoverItem type="tag" content="suthatla" icon={<HashTagIcon/>} />
                <DiscoverItem type="tag" content="mackedoi" icon={<HashTagIcon/>}/>
                <DiscoverItem type="tag" content="sansangthaydoi" icon={<HashTagIcon/>}/>
                <DiscoverItem type="music" content="Yêu Đơn Phương Là Gì (MEE Remix)" icon={<MusicToneIcon/>}/>
                <DiscoverItem type="music" content="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng" icon={<MusicToneIcon/>}/>
                <DiscoverItem type="music" content="Thiên Thần Tình Yêu - RICKY STAR" icon={<MusicToneIcon/>}/>
                <DiscoverItem type="tag" content="7749hieuung" icon={<HashTagIcon/>}/>
                <DiscoverItem type="tag" content="genzlife" icon={<HashTagIcon/>}/>
                <DiscoverItem type="music" content="Tình Đã Đầy Một Tim - Huyền Tâm Môn" icon={<MusicToneIcon/>}/>
                <DiscoverItem type="music" content="Thằng Hầu (Thái Hoàng Remix) [Short Version]" icon={<MusicToneIcon/>}/>
            </div>
        </div>
    );
}

export default Discover;
