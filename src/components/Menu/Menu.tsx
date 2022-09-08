import { List, ListItem } from 'delta_kit';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLink } from 'typings/common';

const links: MenuLink[] = [
    { link: '/', name: 'Overview', icon: 'list-bulleted' },
    { link: '/triggers', name: 'Devices' },
    { link: '/analytics', name: 'Analytics' },
    { link: '/rules', name: 'Rules' },
    { link: '/gallery', name: 'Gallery' },
    { link: '/history', name: 'History' },
    { link: '/settings', name: 'Settings', icon: 'settings' },

    
];

export function Menu() {
    return (
        <List>
            {links.map(({ link, name }) => (
                <ListItem to={link}>{name}</ListItem>
            ))}
        </List>
    );
}
