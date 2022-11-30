import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}> Discover</p>
            <Button
                to={config.routes.following}
                rounded
                className={cx('label-tag')}
                leftIcon={<FontAwesomeIcon icon={faHashtag} />}
            >
                suthatla
            </Button>
            <Button
                rounded
                className={cx('label-tag')}
                leftIcon={<FontAwesomeIcon icon={faMusic} />}
            >
                Thiên Thần Tình Yêu
            </Button>
            <Button
                rounded
                className={cx('label-tag')}
                leftIcon={<FontAwesomeIcon icon={faMusic} />}
            >
                Thiên Thần Tình Yêu
            </Button>
            <Button
                rounded
                className={cx('label-tag')}
                leftIcon={<FontAwesomeIcon icon={faMusic} />}
            >
                Thiên Thần Tình Yêu
            </Button>
        </div>
    );
}

export default Discover;
