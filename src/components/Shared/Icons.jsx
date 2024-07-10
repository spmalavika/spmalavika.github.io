// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const ContactIcons = () => {
//   return (
//     <div style={styles.container}>
//       <a href="https://wa.me/9113206109" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.whatsappIcon }}>
//         <i className="fab fa-whatsapp"></i>
//       </a>
//       <a href="mailto:refine.den.2024@gmail.com" style={styles.icon}>
//         <i className="fas fa-envelope"></i>
//       </a>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   icon: {
//     fontSize: '2rem',
//     margin: '10px',
//     color: '#25D366', // WhatsApp color
//     textDecoration: 'none',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '3rem',
//     height: '3rem',
//     borderRadius: '50%',
//     backgroundColor: 'white', // White background
//   },
//   whatsappIcon: {
//     color: '#25D366', // Specific color for WhatsApp icon
//   },
// };

// export default ContactIcons;


import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactIcons = () => {
  return (
    <div style={styles.container}>
      <a href="https://wa.me/9113206109" target="_blank" rel="noopener noreferrer" style={{ ...styles.icon, ...styles.whatsappIcon }}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:refine.den.2024@gmail.com" style={styles.icon}>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1000, // Ensure the icons are above other content
  },
  icon: {
    fontSize: '2rem',
    margin: '10px',
    color: '#25D366', // WhatsApp color
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'white', // White background
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a shadow for better visibility
    transition: 'transform 0.3s', // Smooth transition for hover effect
  },
  whatsappIcon: {
    color: '#25D366', // Specific color for WhatsApp icon
  },
};

// Add hover effect
styles.icon[':hover'] = {
  transform: 'scale(1.1)', // Slightly increase size on hover
};

export default ContactIcons;

