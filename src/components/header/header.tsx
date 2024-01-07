import React from 'react';
import styles from './header.module.css'
import wolf from '../../images/wolf.png'
import { TiThMenu } from "react-icons/ti";

function Header() {
    return (
        <div className={styles.header}>
            <div>
                <img alt="Logo" className={styles.logo} src={wolf}/>
            </div>
            <div className={styles.title}>Trainer for Lithuanian cases</div>
            <div><TiThMenu /></div>
        </div>
    );
}

export default Header;