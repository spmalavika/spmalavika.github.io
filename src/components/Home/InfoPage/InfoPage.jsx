import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            Considering Refine Dental for your dental needs can ensure a positive experience. Their highly qualified and experienced dentists prioritize top-notch care, offering a comprehensive range of services to address all your dental concerns. From routine checkups and cleanings to advanced procedures, their focus is on providing the best possible solutions to keep your smile healthy and bright.
                            </p>
                            {/* <div className="text-center">
                                <Link href="/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Book an Appointment/ <br />Online Consultation with us</h4>
                                        {/* <small className='text-secondary'>Click here</small> */}
                                        {/* <p><Link to="https://wa.me/9113206109">Click me</Link></p> */}
                                        <a href="https://wa.me/9113206109" >Click me</a>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Emergec ses</h4>
                                        <h6 className='text-secondary'>+91 9113206109</h6>
                                        <p></p>
                                    </div>
                                </div> */}
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'><b>MONDAY <br /> to <br /> SATURDAY</b></small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap"><p>10am-9pm</p></li>
                                        <small className='text-secondary'><b>SUNDAY</b></small>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap"><p>10am-2pm </p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage