import React, { Component } from 'react';
import Vndirect from '..//assets/images/Logo_VND.png';
import VietnamLogo from '../assets/images/vietnam-logo.png';
import ChinaLogo from '../assets/images/china-logo.png';
import Japanlogo from '../assets/images/japan-logo.png';
import Uklogo from '../assets/images/uk-logo.png';

class Header extends Component {
    render() {
        return (
            
            <header className="header topbar">
                <div className="topbar__left">
                    <div className="topbar__logo align-item-center">
                    <a href="#" className="topbar__link-logo">
                        <img src={Vndirect} alt className="topbar__img" />
                    </a>
                    </div>
                    <div className="topbar__search align-item-center">
                    <input type="text" className="search__input" placeholder="Xem chi tiết mã" />
                    <a href="#" className="search__icon"> <i className="fas fa-search-dollar" /> </a>
                    </div>
                    <div className="topbar__vnds-clock align-item-center">
                    <span className="topbar__vnds-digital-lock">15:09:52</span>
                    <span className="topbar__vnds-date">18/03/2021</span>
                    </div>
                </div>
                <div className="topbar__right">
                    <div className="topbar__show-custody align-item-center">
                    <a href="#" className="topbar__feedback">
                        <i className="far fa-comments" />
                        Phản hồi
                    </a>
                    <div className="topbar__language-dropdown">
                        <div className="language-dropdown-btn">
                        <img width={20} height={20} src={VietnamLogo} />
                        <ul className="language-dropdown-list">
                            <li value="en"><img width={20} height={20} src={Uklogo} /><span>English</span></li>
                            <li value="vi"><img width={20} height={20} src={VietnamLogo}/><span>Tiếng Việt</span></li>
                            <li value="zh"><img width={20} height={20} src={ChinaLogo} /><span>中文</span></li>
                            <li value="jp"><img width={20} height={20} src={Japanlogo} /><span>日本語</span></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="topbar__account">
                    <span className="btn-icon btn-social-icon">
                        <i className="fa fa-user user-icon" />
                        &nbsp;
                        &nbsp;
                        <i className="fa fa-caret-down" />
                    </span>
                    <ul className="account-dropdown-list">
                        <li className="user-name"><a href="/thong-tin-ca-nhan">NguyenTu Official</a></li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fas fa-unlock-alt" />
                            &nbsp; Đổi mật khẩu </a>
                        </li>
                        <li><a><i className="fa fa-eraser" />
                            Xóa dữ liệu cài đặt
                        </a></li>
                        <li><a><i className="fas fa-sign-out-alt" />
                            Đăng xuất
                        </a></li>
                    </ul>
                    </div>
                </div>
                </header>
           
        );
    }
}

export default Header;
