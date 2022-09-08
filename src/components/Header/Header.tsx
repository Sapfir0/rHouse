import styles from './Header.module.scss';
import React from 'react';
import { Button, ProgressBar } from 'delta_kit';
import { IconNames } from 'delta_kit/dist/typings/iconNames';

export function Header() {
    return <div className={styles.root}>
        <div>
        <>Logotip</>
        <Button icon={'list-bulleted'} />
        </div>
        <div>
        <Button icon={'server'} />
        <ProgressBar value={37} />
        </div>
        <div>
        <Button icon={'help'} />
        <Button icon={'email'} />
        <Button icon={'notifications'} />
        </div>

    </div>;
}
