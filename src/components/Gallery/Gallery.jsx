
// import img2 from '../../../public/newgallery/IMG_0784 (1).png';
// import img3 from '../../../images/doc/DSC_0093.png';
// import img4 from '../../../images/doc/DSC_0117.png';
// import img5 from '../../../images/doc/DSC_0115.png';
// import img6 from '../../../images/doc/IMG_0778 (1).png';
// import img7 from '../../../images/doc/DSC_0121.png';
// import img8 from '../../../images/doc/DSC_0109.png';
// import img9 from '../../../images/doc/IMG_0775 (1).png';
// import img10 from '../../../images/doc/Watermark (1).png';
// import img11 from '../../../images/doc/Watermark (2).png';
// import img12 from '../../../images/doc/teet.png';
// import img13 from '../../../images/doc/Laser crown exposure.png';

// import './index.css';
// import { Image } from 'antd';
// import { Link } from 'react-router-dom'
import React from 'react';
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
import bgImage1 from '../../images/img/banner.jpg';
import backgroundImage from '../../images/doc/bgd.png';
import { Image } from 'antd';

const Gallery = () => {
    // const imageArray = [img10,img11,img12,img13,img2,img3,img4,img5,img6,img7, img8, img9]
    const imageArray = [
        '/newgallery/IMG_0784 (1).png',
        '/newgallery/DSC_0093.png',
        '/newgallery/DSC_0117.png',
        '/newgallery/DSC_0115.png',
        '/newgallery/IMG_0778 (1).png',
        '/newgallery/DSC_0121.png',
        '/newgallery/DSC_0109.png',
        '/newgallery/IMG_0775 (1).png',
        '/newgallery/Watermark (1).png',
        '/newgallery/Watermark (2).png',
        '/newgallery/teet.png',
        '/newgallery/Laser crown exposure.png'
    ]
    
    return (
        <>
            <Header />
            <SubHeader title="Gallery"  />
        
        
        {/* // <section className="gallery container">
        //     <div className="text-center mb-5">
        //         <div className="section-title mb-3">
        //             <h2>Gallery</h2>
        //             <p></p>
        //         </div>
        //     </div> */}

            <div className="container-fluid">
                <div className="row g-0">
                    <Image.PreviewGroup>
                        {
                            imageArray.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-12" key={index + 55}>
                                    <div className="gallery-item">
                                        <div className="galelry-lightbox d-flex justify-content-center align-items-center">
                                            <Image src={item} alt="" className="w-100" style={{objectFit:'cover',maxHeight:'280px', minHeight:'280px'}}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Image.PreviewGroup>
                </div>

            </div>
        {/* // </section> */}
        </>
    )
}

export default Gallery