import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
