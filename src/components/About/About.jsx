import React from 'react'
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg'
import img from '../../images/logo1.png'
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';
import doctorimage from '../../images/doc/doc1.jpg';
import amalimage from '../../images/doc/tooth.jpg';
import amalimage2 from '../../images/doc/tooth.jpg';
import nikhilimage2 from '../../images/doc/doc1.jpg';
import bgImage1 from '../../images/img/banner.jpg';
import backgroundImage from '../../images/doc/bgd.png';

const sectionStyle1 = {
    background: `url(${bgImage1}) no-repeat 50% 50%`,
    backgroundSize: 'cover',
    position: 'relative',
    marginTop: '88px',
    padding: '120px 0px 70px 0px',
};
const overlayStyle1 = {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100%',
    opacity: '0.9',
    background: '#223a66',
};
const About = () => {
    
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = (
    //     <div className="doctor-container d-flex justify-content-center">
    //     <>
    //         <div className="col-lg-3 col-md-6 col-sm-6" key={1}>
    //         <div className="card shadow border-0 mb-5 mb-lg-0">
    //             <img src={amalimage} class="img-fluid w-100" alt="" />
    //             <div className="p-2">
    //             <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{'Dr. Amal Hari'}</a></h4>
    //             <p>{'Periodotist & Implantologist'}</p>
    //             </div>
    //         </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-6" key={2}>
    //         <div className="card shadow border-0 mb-5 mb-lg-0">
    //             <img src={doctorimage} class="img-fluid w-100" alt="" />
    //             <div className="p-2">
    //             <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{'Dr. Nikhil Johnson'}</a></h4>
    //             <p>{'Orthodontist'}</p>
    //             </div>
    //         </div>
    //         </div>
    //     </>
    //     </div>
    //   );
    <div className={sectionStyle1}>
        {/* <div style={overlayStyle1} className="overlay"></div> */}
    <div className="doctor-container d-flex justify-content-center">
      <div className="col-lg-3 col-md-6 col-sm-6">
        {/* <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          useKeyboardArrows={true} // Enable keyboard navigation
        > */}
          {/* <div className="card shadow border-0 mb-5 mb-lg-0" key={1}>
            <img src={amalimage} className="img-fluid w-100" alt="Dr. Amal Hari" />
            <div className="p-2">
              <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>Dr. Amal Hari</h4>
              <p>Periodontist & Implantologist</p>
            </div>
          </div> */}
          <div className="card shadow border-0 mb-5 mb-lg-0">
            <img src={amalimage2} className="img-fluid w-100" alt="Dr. Amal Hari" />
            <div className="p-2">
              <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>Dr. Amal Hari</h4>
              <p>Periodontist & Implantologist</p>
            </div>
          </div>
        {/* </Carousel> */}
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        {/* <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          useKeyboardArrows={true} // Enable keyboard navigation
        > */}
          {/* <div className="card shadow border-0 mb-5 mb-lg-0" key={2}>
            <img src={doctorimage} className="img-fluid w-100" alt="Dr. Amal Hari" />
            <div className="p-2">
              <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>Dr. Nikhil Johnson </h4>
              <p>Orthodontist</p>
            </div>
          </div> */}
          <div className="card shadow border-0 mb-5 mb-lg-0">
            <img src={nikhilimage2} className="img-fluid w-100" alt="Dr. Amal Hari" />
            <div className="p-2">
              <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>Dr. Nikhil Johnson</h4>
              <p>Orthodontist</p>
            </div>
          </div>
        {/* </Carousel> */}
      </div>
    </div>
    </div>
    
  );
    let content = null;

    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100  rounded-top image-hover" style={{ objectFit: 'contain' }} />

                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    return (
        <>
            <Header />
            <SubHeader title="about us"  />
            {/* <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Doctors Acheivement</h2>
                            <p className='form-text m-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
                    </div>

                    <div className="col-lg-8">

                        <img src={ImageHeading} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div> */}

            {/* <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Team</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {doctorContent}
                </div>
            </div> */}

<div className="container" style={{
      backgroundImage: `url(${backgroundImage})`, // Set background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      marginBottom: 100,
      marginTop: 100
    }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Team</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {doctorContent}
                </div>
            </div>

            <div className="container say-about" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>TestimoNials</h2>
                            {/* <p className='form-text m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum!</p> */}
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Feels relaxing!</h4>
                            <span>Shalakha Suraj</span>
                        </div>
                        <p className='form-text'>
                        The clinic is very beautifully designed and feels relaxing.
The doctor very patiently listened to my issue and treated me well. Throughout the procedure he ensured my comfort.
Highly recommended !!
                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Modern and impeccably clean!</h4>
                            <span>Sanskriti Parihar</span>
                        </div>
                        <p className='form-text'>
                        I highly recommend this Clinic for anyone seeking top-notch dental care. From the moment I walked in, I was greeted warmly. The clinic itself is modern and impeccably clean, which immediately put me at ease.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Highly professional!</h4>
                            <span>Sujitha Golla</span>
                        </div>
                        <p className='form-text'>
                        Refine Dental Clinic has highly professional and talented doctors.I got my root canal treatment done here. His expertise and the clinic's welcoming atmosphere made the procedure smooth and painless. Highly recommend for quality dental care.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About