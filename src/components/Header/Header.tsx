import styles from './Header.module.scss';
import React from 'react';
import { Button, ProgressBar } from 'delta_kit';
import { AvailableMemoryProgress } from '../AvailableMemoryProgress/AvailableMemoryProgress';

export function Header() {
    return <div className={styles.root}>
        <div>
        <>Logotip</>
        <Button className={styles.list} icon={'list-bulleted'} />
        </div>
        <AvailableMemoryProgress />
        <div>
        <Button icon={'help'} />
        <Button icon={'email'} />
        <Button icon={'notifications'} />
        </div>

    </div>;
}
