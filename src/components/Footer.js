import React from 'react'
import '../styles.css'

// This '{}' helps to use JavaScript inside it, making the JSX more valid, javaScript/XML.  
export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='footer'>
            <p className='footer-text'>&copy; {currentYear} Moviedux, All rights reserved.</p>
        </footer>
    );
}