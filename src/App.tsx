import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import styles from './App.module.scss'
import { Overview } from './pages/Overview';

function App() {
    return (
        <div className={styles.root}>
            <BrowserRouter>
                <Header />
                <div className={styles.mainLayout}>
                    <Menu />
                    <div className={styles.page}>
                        <Routes>
                            <Route path='/' element={<Overview />}/>
                        </Routes>
                    </div>
                </div>
 
            </BrowserRouter>
        </div>
    );
}

export default App;
