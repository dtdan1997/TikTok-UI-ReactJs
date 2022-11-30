import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <FooterItem />
            <p className={cx('label')}> @ 2022 Tiktok</p>
        </div>
    );
}

export default Footer;
