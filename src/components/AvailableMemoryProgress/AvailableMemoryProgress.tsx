import styles from './AvailableMemoryProgress.module.scss';
import React from 'react';
import { Button, ProgressBar } from '@sapfir0/delta_kit';

export function AvailableMemoryProgress() {
    return <div className={styles.root}>
        <Button icon={'server'} />
        <ProgressBar max={100} value={37} />
    </div>;
}
