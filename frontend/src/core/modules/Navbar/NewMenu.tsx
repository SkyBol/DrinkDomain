import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from "../../../assets/img/liquor/logo_1.png";

const NewMenu: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>('');

    const handleClick = (tab: string, path: string) => {
        setActiveTab(tab);
        navigate(path);
    };

    return (
        <nav className={styles.menu}>
            <img src={logo} style={{width:"3vw", minWidth:"40px"}} alt="Logo"/>
            <span
                className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
                onClick={() => handleClick('home', "/")}
            >
                <span className={styles.icon}>
                    <i data-feather="home"></i>
                </span>
                <div className={styles.tab}>Home</div>
            </span>
            <span
                className={`${styles.navItem} ${activeTab === 'bar' ? styles.active : ''}`}
                onClick={() => handleClick('bar', "/bottles")}
            >
                <span className={styles.icon}>
                    <i data-feather="search"></i>
                </span>
                <div className={styles.tab}>Bar</div>
            </span>
            <span
                className={`${styles.navItem} ${activeTab === 'guestBook' ? styles.active : ''}`}
                onClick={() => handleClick('guestBook', "/guestBook")}
            >
                <span className={styles.icon}>
                    <i data-feather="bell"></i>
                </span>
                <div className={styles.tab}>Guestbook</div>
            </span>
            <span
                className={`${styles.navItem} ${activeTab === 'addBottle' ? styles.active : ''}`}
                onClick={() => handleClick('addBottle', "/bottles/add")}
            >
                <span className={styles.icon}>
                    <i data-feather="star"></i>
                </span>
                <div className={styles.tab}>Add Bottle</div>
            </span>
            <span
                className={`${styles.navItem} ${activeTab === 'logout' ? styles.active : ''}`}
                onClick={() => handleClick('logout', "/login")}
            >
                <span className={styles.icon}>
                    <i data-feather="bell"></i>
                </span>
                <div className={styles.tab}>Logout</div>
            </span>
        </nav>
    );
};

export default NewMenu;
