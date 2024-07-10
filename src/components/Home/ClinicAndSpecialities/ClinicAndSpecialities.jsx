import React from 'react';
import img1 from '../../../images/specialities/root canal.png';
import img2 from '../../../images/specialities/conservative dentistry.png';
import img3 from '../../../images/specialities/Laser dentistry.png';
import img4 from '../../../images/specialities/OS.png';
import img5 from '../../../images/specialities/Periodontics_1.jpg';
import img6 from '../../../images/specialities/Full Mouth Rehabilitation.png';
import img7 from '../../../images/specialities/prosthodontics.jpg';
import img8 from '../../../images/specialities/Dental Implants.png';
import img9 from '../../../images/specialities/Pedodontics.png';
import img10 from '../../../images/specialities/orthodontic_3954427.png';
import img11 from '../../../images/specialities/cosmetology.png';
import img12 from '../../../images/specialities/aligners.png';
import { FaCheckDouble } from "react-icons/fa";
import './index.css';

const ClinicAndSpecialities = () => {
	return (
		<section className="section section-specialities position-relative">
			<div className="container-fluid">
				<div className='mb-0 section-title text-center'>
					{/* <h2>Our Specialities</h2> */}
					<p className='m-0'><h2>DENTAL SERVICES</h2></p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
						<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img8} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Dental Implants</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img12} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Aligners</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img3} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Laser Dentistry</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img10} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Orthodontics</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img5} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Periodontics</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img6} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Full Mouth Rehabilitation</p>
							</div>
						</div>
						
					</div>
					
				</div>
				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
						<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img1} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Endodontics</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img9} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Pedodontics</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img4} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Oral Surgery</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img7} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Prosthodontics</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img2} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Conservative Dentistry</p>
							</div>
							
				
						</div>
					</div>
				</div>
				
			</div>
			
			{/* <section className="section section-specialities position-relative"></section> */}
			
			<div className="container-fluid">
				<div className='mb-0 section-title text-center'>
					{/* <h2>Our Specialities</h2> */}
					<br></br>
					<p className='m-0'><h2>FACIAL COSMETOLOGY</h2></p>
				</div>
			</div>
			<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img11} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								{/* <p>Urology</p> */}
							</div>
						</div>
					</div>
				</div>
			
		</section>
		
		
		
	);
};

export default ClinicAndSpecialities;