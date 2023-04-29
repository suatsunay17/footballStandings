// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.css'
// import onClickOutside from 'react-onclickoutside'


// export const Dropdown = () => {
//     const [open, setOpen] = useState(false);
//     const [selection, setSelection] = useState([]);
//     const toggle = () => setOpen(!open)



//     function handleClick(e) {
//         if (!selection.some(current => current.id === e.id)) {
//             setSelection([e])
//         }else{
//             setSelection([])
//         }
//     }

//     return (
//         <>
//         </>
//         // <div className='dd-wrapper'>
//         //     <div tabIndex={0} className='dd-header' role='button' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
//         //         <div className='dd-header-title'>
//         //             <p className='dd-haeder-title--bold'>Select League</p>
//         //         </div>
//         //         <div className='dd-header__action'>
//         //             <p>
//         //                 {open ? 'Close' : 'Open'}
//         //             </p>
//         //         </div>
//         //     </div>
//         //     {open && (
//         //         <ul className='dd-list'>
//         //             <li id='premier' className={styles.navItem}><Link to="/premier-league" className={styles.navLink}>Premier League</Link></li>
//         //             <li id='laliga' className={styles.navItem}><Link to="/la-liga" className={styles.navLink}>La Liga</Link></li>
//         //             <li id='bundesliga' className={styles.navItem}><Link to="/bundesliga" className={styles.navLink}>Bundesliga</Link></li>
//         //             <li id='seriea' className={styles.navItem}><Link to="/serie-a" className={styles.navLink}>Serie A</Link></li>
//         //             <li id='ligue1' className={styles.navItem}><Link to="/ligue-1" className={styles.navLink}>Ligue 1</Link></li>
//         //         </ul>
//         //     )}
//         // </div>
//     )
// }
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css'
export const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    function toggle() {
        setOpen(!open);
    }

    return (
        <div className={styles['dd-wrapper']} ref={wrapperRef}>
            <div tabIndex={0} className={styles['dd-header']} role='button' onKeyPress={toggle} onClick={toggle} aria-expanded={open}>
                <div className={styles['dd-header-title']}>
                    <p className={styles['dd-header-title--bold']}>Select League</p>
                </div>
                <div className={styles['dd-header__action']}>
                </div>
            </div>
            {open && (
                <ul className={styles['dd-list']}>
                    <li id='premier' className={styles['dd-item']}>
                        <Link to='/premier-league' className={styles['dd-link']}>
                            Premier League
                        </Link>
                    </li>
                    <li id='laliga' className={styles['dd-item']}>
                        <Link to='/la-liga' className={styles['dd-link']}>
                            La Liga
                        </Link>
                    </li>
                    <li id='bundesliga' className={styles['dd-item']}>
                        <Link to='/bundesliga' className={styles['dd-link']}>
                            Bundesliga
                        </Link>
                    </li>
                    <li id='seriea' className={styles['dd-item']}>
                        <Link to='/serie-a' className={styles['dd-link']}>
                            Serie A
                        </Link>
                    </li>
                    <li id='ligue1' className={styles['dd-item']}>
                        <Link to='/ligue-1' className={styles['dd-link']}>
                            Ligue 1
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
