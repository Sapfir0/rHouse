import { Card } from 'delta_kit'
import React from 'react'

export function Overview() {
    return <><h1>Overview</h1>
    <Card header={<>Camera</>} content={<>f</>}></Card>
    <Card header={<>Status by units</>} content={<>
    <span>On livingroom</span>
    <span>745</span>
    </>}></Card>
    
    </>
}