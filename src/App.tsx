import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.root}>
            <BrowserRouter>
                <Header />
                <Menu />
            </BrowserRouter>
        </div>
    );
}

export default App;
