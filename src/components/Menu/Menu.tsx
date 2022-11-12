import { List, ListItem } from '@sapfir0/delta_kit';
import React from 'react';
import { MenuLink } from 'typings/common';
import styles from './Menu.module.scss';

const links: MenuLink[] = [
    { name: 'Overview', link: '/', icon: 'home' },
    { name: 'Devices', link: '/triggers', icon: 'settings' },
    { name: 'Analytics', link: '/analytics', icon: 'chart-line' },
    { name: 'Rules', link: '/rules', icon: 'list-bulleted' },
    { name: 'Gallery', link: '/gallery', icon: 'lightbulb' },
    { name: 'History', link: '/history', icon: 'lightbulb' },
    { name: 'Settings', link: '/settings', icon: 'settings' },
];

export function Menu() {    
    return (
        <List className={styles.root}>
            {links.map(({ link, name, icon }) => (
                <ListItem className={styles.listItem} key={link} selected={ window.location.pathname === link} icon={icon} to={link}>{name}</ListItem>
            ))}
        </List>
    );
}
