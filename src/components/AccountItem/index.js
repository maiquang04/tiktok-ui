import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f6f15c905246c79255e613a968320200.jpeg?lk3s=a5d48078&x-expires=1704373200&x-signature=I11fiwdtFUZ8uHMSd9A3O6Wdko8%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>ipmvietnam</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx('name')}>IPM Viet Nam</span>
            </div>
        </div>
    );
}

export default AccountItem;
