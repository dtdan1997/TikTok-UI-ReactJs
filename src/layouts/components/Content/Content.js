import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faComment,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Content.module.scss';
import Button from '~/components/Button';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function VideoInfo() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/656e924772db0f5ece62fd39d4718b80~c5_100x100.jpeg?x-expires=1669878000&x-signature=X8D45Zo9Vyto%2Bnoz3%2BLGDd8750Q%3D"
                alt="avatar"
            />
            <div className={cx('middle')}>
                <div className={cx('info')}>
                    <a href="#" className={cx('nickname')}>
                        <strong>saymua38</strong>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    </a>
                    <p className={cx('name')}>nhauthoi</p>
                </div>
                <div classnane={cx('title')}>hoi chaammmm</div>
                <div className={cx('music')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <a href="#" className={cx('music-name')}>
                        Nhac dang phat
                    </a>
                </div>
            </div>
            <div>
                <Button className={cx('follow-btn')} outline>
                    Follow
                </Button>
            </div>
        </div>
    );
}

function Video() {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className={cx('videos')}>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className={cx('video-item')}
                src="https://v16-webapp.tiktok.com/1478fd3e8c68a3c09ea3761bce107162/63874431/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oUxi1oNjfbGA09MxaKDaEefErGgnHgRe4QbLm2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5684&bt=2842&cs=0&ds=3&ft=hatGN2BHjVQ9wthQ-Dhd.5AUkX4gTsU9pX2OjLYqEeC&mime_type=video_mp4&qs=0&rc=ZmllPGc2Ojc4NDw4PGhlaEBpM3VrdWc6ZnJvZzMzZjgzM0A2MWNfLmJeX18xYzQzLmIuYSNhM19lcjRvNXNgLS1kL2Nzcw%3D%3D&l=202211300549560102450451760D0C965A&btag=80000"
                loop
            />

            <div className={cx('actions')}>
                <div className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon
                            className={cx('icon-name')}
                            icon={faHeart}
                        />
                    </div>
                    <span className={cx('number')}>5000</span>
                </div>
                <div className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon
                            className={cx('icon-name')}
                            icon={faComment}
                        />
                    </div>
                    <span className={cx('number')}>200</span>
                </div>
                <div className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon
                            className={cx('icon-name')}
                            icon={faShare}
                        />
                    </div>
                    <span className={cx('number')}>500</span>
                </div>
            </div>
        </div>
    );
}

const Content = () => {
    return (
        <div className={cx('content')}>
            <VideoInfo />
            <Video />
        </div>
    );
};

export default Content;
