import React from 'react';
import './Footer.css';
import logo3 from '../../../images/logo3.png';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-about">
								<div className="footer-logo">
									<Link to={'/'}>
										<img src={logo3} alt="logo3" style={{ maxWidth: '100px' }} />
									</Link>
								</div>
								<div className="footer-about-content">
									<p className="form-text" style={{ maxWidth:180 }}>From fear to cheer:Enjoy pain-free excellence with our quality-focused dental care.</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title mt-3 mt-md-0">Contact Us</h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p>Sy No 25/2, Saud Complex<br /> 1st Floor <br />  Sambharam College Road,  <br /> Best county 3, <br /> Vidyaranyapura,Bengaluru, Karnataka </p>
									</div>
									<p>
										<i className="fas fa-phone-alt"></i>
										+91 9113206109
									</p>
									<p className="mb-0">
										<i className="fas fa-envelope"></i>
										refine.den.2024@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0"><a href="templateshub.net">
										<div className="copyRight text-center">
											<p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
										</div></a></p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2 justify-content-center">
										<Link to={'/'} className='text-white'>Terms and Conditions</Link>
										<Link to={'/'} className='text-white'>Policy</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</footer>
	);
};

export default Footer;