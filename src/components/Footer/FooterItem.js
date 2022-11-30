import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const FOOTER_DATA = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'About',
        to: '/',
    },
    {
        title: 'Newsroom',
        to: '/',
    },
    {
        title: 'Contact',
        to: '/',
    },
    {
        title: 'Careers',
        to: '/',
    },

    {
        title: 'ByteDance',
        to: '/',
    },
];

const FOOTER_DATA2 = [
    {
        title: 'TikTok for Good',
        to: '/',
    },
    {
        title: 'Advertise',
        to: '/',
    },
    {
        title: 'Developers',
        to: '/',
    },
    {
        title: 'Transparency',
        to: '/',
    },
    {
        title: 'TikTok Rewards',
        to: '/',
    },
    {
        title: 'tiktok Browse',
        to: '/',
    },
    {
        title: 'TikTok Embeds',
        to: '/',
    },
    {
        title: 'Advertise',
        to: '/',
    },
];

const FOOTER_DATA3 = [
    {
        title: 'Help',
        to: '/',
    },
    {
        title: 'Safety',
        to: '/',
    },
    {
        title: 'Terms',
        to: '/',
    },
    {
        title: 'privacy',
        to: '/',
    },
    {
        title: 'Creator Portal',
        to: '/',
    },
    {
        title: 'Community Guidelines',
        to: '/',
    },
];

const renderData1 = FOOTER_DATA.map(item => {
    return <Button className={cx('title')}>{item.title}</Button>;
});
const renderData2 = FOOTER_DATA2.map(item => {
    return <Button className={cx('title')}>{item.title}</Button>;
});
const renderData3 = FOOTER_DATA3.map(item => {
    return <Button className={cx('title')}>{item.title}</Button>;
});

function FooterItem() {
    return (
        <>
            <div className={cx('footer-item')}>{renderData1}</div>
            <div className={cx('footer-item')}>{renderData2}</div>
            <div className={cx('footer-item')}>{renderData3}</div>
        </>
    );
}

export default FooterItem;
