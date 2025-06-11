import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      backgroundColor: '#2c3e50',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ecf0f1',
      textDecoration: 'none'
    },
    navLinks: {
      display: 'flex',
      gap: '20px'
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '16px'
    },
    linkHover: {
      textDecoration: 'underline'
    }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/dashboard" style={styles.logo}>Dashboard</Link>
      <div style={styles.navLinks}>
        <Link to="/admin" style={styles.link}>Admin</Link>
        <Link to="/manager" style={styles.link}>Manager</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
