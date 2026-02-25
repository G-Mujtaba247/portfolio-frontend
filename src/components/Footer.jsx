import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {year} Portfolio. Built with ❤️ using MERN Stack.
                </p>
                <ul className="footer-links">
                    <li><a href="https://github.com/G-Mujtaba247" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/ghulam-mujtaba-gm247" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
