import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import SocialLinks from '../SocialLinks';
import { getMenuApi } from '../../../api/menu';

import './MenuTop.scss';
import logoWhite from '../../../assets/img/png/original.png';

export default function MenuTop(props) {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menus.forEach(item => {
                item.active && arrayMenu.push(item);
            });

            setMenuData(arrayMenu);
        });
    }, []);

    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                <Link to={'/'}>
                    <img src={logoWhite} alt="Elias Guere logo" />
                </Link>
            </Menu.Item>
            {menuData.map(item => {
                const external = item.url.indexOf('http') > -1;

                if (external) {
                    return (
                        <Menu.Item
                            key={item._id}
                            className="menu-top-web__item"
                        >
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.title}
                            </a>
                        </Menu.Item>
                    );
                }

                return (
                    <Menu.Item key={item._id} className="menu-top-web__item">
                        <Link to={'/contact'}>{item.title}</Link>
                    </Menu.Item>
                );
            })}
            <SocialLinks />
        </Menu>
    );
}
