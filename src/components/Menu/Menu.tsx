import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLink } from 'typings/common';

const links: MenuLink[] = [
    { link: '/', name: 'Главная' },
    { link: '/triggers', name: 'Триггеры' },
    { link: '/update', name: 'Обновления' },
];

export function Menu() {
    return links.map(({ link, name }) => <Link to={link}>{name}</Link>);
}
