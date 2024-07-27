import React from 'react';

const User = ({ name, type }) => {
  // Define inline styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      textAlign: 'center',
    },
    header: {
      borderBottom: '1px solid #ddd',
      marginBottom: '20px',
      paddingBottom: '10px',
    },
    userName: {
      color: '#4a90e2',
    },
    userType: {
      fontSize: '0.9rem',
      color: '#777',
    },
    welcome: {
      fontSize: '1.5rem',
      color: '#333',
    },
    highlight: {
      color: '#ff5722',
      fontWeight: 'bold',
    },
    nav: {
      marginTop: '20px',
    },
    linksList: {
      listStyleType: 'none',
      padding: 0,
    },
    linkItem: {
      margin: '10px 0',
    },
    link: {
      textDecoration: 'none',
      color: '#ffffff',
      backgroundColor: '#4a90e2',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      display: 'inline-block',
    },
    linkHover: {
      backgroundColor: '#357abd',
    },
  };

  // Custom hook to handle hover state
  const [hoveredLink, setHoveredLink] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h3>
          Welcome, <span style={styles.userName}>{name}</span>!
        </h3>
        <p style={styles.userType}>
          You are logged in as: <strong>{type}</strong>
        </p>
      </header>
      <main>
        <h1 style={styles.welcome}>
          Welcome to KLU University <span style={styles.highlight}>STUDENT</span> Portal
        </h1>
        <nav style={styles.nav}>
          <ul style={styles.linksList}>
            {[
              { name: 'KLU ERP', url: 'https://newerp.kluniversity.in/' },
              { name: 'KLU LMS', url: 'https://lms.kluniversity.in' },
              { name: 'Official Website', url: 'https://www.kluniversity.in' },
            ].map((link, index) => (
              <li key={index} style={styles.linkItem}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.link,
                    ...(hoveredLink === index && styles.linkHover),
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default User;
