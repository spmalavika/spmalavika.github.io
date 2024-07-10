// import React from 'react';
// import './index.css';
// import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

// const TopHeader = () => {
//     return (
//         <div id="topbar" className="d-flex align-items-center fixed-top">
//             <div className="container d-flex justify-content-between">
//                 <div className="contact-info d-flex align-items-center">
//                     <FaEnvelope className='contact-icon'/> <a href="mailto:refine.den.2024@gmail.com">refine.den.2024@gmail.com</a>
//                     <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 9113206109">+91 9113206109</a> 
//                 </div>
//                 <div className="d-none d-lg-flex social-links align-items-center">
//                     <a href="www.linkedin.com/in/refine-dental" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
//                     <a href="https://www.facebook.com/profile.php?id=61561602174051" target='_blank' rel="noreferrer" className="facebook"><FaFacebookSquare /></a>
//                     <a href="https://www.instagram.com/refine_dental_facial_aesthetic" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default TopHeader;


import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:refine.den.2024@gmail.com">refine.den.2024@gmail.com</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 9113206109">+91 9113206109</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="https://www.facebook.com/profile.php?id=61561602174051" target='_blank' rel="noreferrer" className="facebook">
                        <FaFacebookSquare style={{ fontSize: '1.5rem' }} />
                    </a>
                    <a href="https://www.instagram.com/refine_dental_facial_aesthetic" target='_blank' rel="noreferrer" className="instagram">
                        <FaInstagramSquare style={{ fontSize: '1.5rem' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
