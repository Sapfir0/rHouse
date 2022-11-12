import styles from './Header.module.scss';
import React from 'react';
import { Button, ProgressBar } from '@sapfir0/delta_kit';
import { AvailableMemoryProgress } from '../AvailableMemoryProgress/AvailableMemoryProgress';

export function Header() {
    return <div className={styles.root}>
        <div className={styles.logo}>RHouse</div>
        <Button className={styles.list} icon={'list-bulleted'} />
        <AvailableMemoryProgress />
        <div>
        <Button icon={'help'} />
        <Button icon={'email'} />
        <Button icon={'notifications'} />
        </div>

    </div>;
}
