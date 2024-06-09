import React from 'react'
import './index.css';
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
import doctorimage from '../../images/doc/doc1.jpg'
import amalimage from '../../images/doc/tooth.jpg'

const About = () => {
    
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = (
        <div className="doctor-container d-flex justify-content-center">
        <>
            <div className="col-lg-3 col-md-6 col-sm-6" key={1}>
            <div className="card shadow border-0 mb-5 mb-lg-0">
                <img src={amalimage} class="img-fluid w-100" alt="" />
                <div className="p-2">
                <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{'Amal Hari'}</a></h4>
                <p>{'Designation'}</p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6" key={2}>
            <div className="card shadow border-0 mb-5 mb-lg-0">
                <img src={doctorimage} class="img-fluid w-100" alt="" />
                <div className="p-2">
                <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{'Amal Hari'}</a></h4>
                <p>{'Designation'}</p>
                </div>
            </div>
            </div>
        </>
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
            <SubHeader title="about us" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
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
            </div>
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Specialist</h2>
                            <p className='form-text m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum!</p>
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
                            <h2 className='text-uppercase'>What Doctor's Say</h2>
                            <p className='form-text m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsum!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Amazing service!</h4>
                            <span>John Partho</span>
                        </div>
                        <p className='form-text'>
                            They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About