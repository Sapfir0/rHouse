import { Card, Statement } from 'delta_kit'
import React from 'react'
import styles from './Overview.module.scss'

export function Overview() {
    return <><h1>Overview</h1>
    <div className={styles.root}>
    <Card header={<>Camera</>}><>f</></Card>
    <Card header={<>Status by units</>}><Statement value={22} dimension='мм' size='large'/></Card>
    <Card header={<>Outside</>}><Statement value={20.0} dimension='F' size='large'/></Card>
    <Card header={<>Inside</>}>
        <div className={styles.longCard}>
            <Statement value={23.0} dimension='F' size='large' />
            <Statement value={23.0} dimension='F' size='large' />
            <Statement value={23.0} dimension='F' size='large' />
        </div>
    </Card>
    <Card header={<>Inside</>}><div className={styles.longCard}>
            <Statement value={23.0} dimension='F' size='large' />
            <Statement value={23.0} dimension='F' size='large' />
            <Statement value={23.0} dimension='F' size='large' />
        </div></Card>
        </div>
    </>
}