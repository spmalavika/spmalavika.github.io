import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import endoImg from '../../images/features/endo.jpg'
import orthoImg from '../../images/features/ortho.jpg'
import perioImg from '../../images/features/perio.jpg'
import prosthoImg from '../../images/features/prostho.jpg'
import oralsurgeryImg from '../../images/features/oralsurgery.jpg'
import pedoImg from '../../images/features/pedo.jpg'
import implantImg from '../../images/features/implants.jpg'
import laserImg from '../../images/features/laser.jpg'
import conservativeImg from '../../images/features/conservative.jpg'
import fmrImg from '../../images/features/fmr.jpg'
import cosmetoImg from '../../images/features/cosmeto.jpg'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

// const headings = [
//   "Endodontics",
//   "Orthodontics",
//   "Periodontics",
//   "Prosthodontics",
//   "Oral Surgery",
//   "Pedodontics",
//   "Laser Dentistry",
//   "Dental Implants",
//   "Conservative Dentistry",
//   "Aligners",
//   "Full Mouth Rehabilitation",
//   "Cosmetology",
// ];
const sections = [
  {
    heading: "Conservative & Endodontics",
    points: ["Root Canal Treatment", "Laser Root Canal Therapy", "Re-root Canal Therapy","Post and Core Treatment"],
    img: endoImg
  },
  {
    heading: "Orthodontics",
    points: ["Clear Aligners","Standard Metal Braces","Self Ligating Braces","Ceramic Braces","Lingual Braces","Myofunctional Therapy","Orthopaedic Therapy","Nightguard","TMJ Therapy"],
    img: orthoImg
  },
  {
    heading: "Periodontics",
    points: ["Scaling and Root Planing", "Periodontal Flap Surgeries","Smile Designing","Guided Tissue and Bone Regeneration","Root Coverage for Gum Recession","Gingival Depigmentation","Frenectomy & Frenotomy"],
    img: perioImg
  },
  {
    heading: "Prosthodontics",
    points: ["Crowns and bridges","Removable partial denture","Flexible dentures","Obturator","Post CA Obturator","Complete Denture","Procelain Veneers","Composite Veneers"],
    img: prosthoImg
  },
  {
    heading: "Oral Surgery",
    points: ["Tooth Extraction", "Alveoloplasty","Third Molar/Wisdom tooth extraction","Biopsies","Mucocele Excision","Cyst Enucleation","Tongue-tie correction","Laceration Suturing","Oro antral closure","Intermaxilliary Fixation","Arch bar splinting"],
    img: oralsurgeryImg
  },
  {
    heading: "Pedodontics",
    points: ["Preventive care", "Fluoride treatments", "Pit & Fissure sealants","Pulpotomy","Pulpectomy","Restoration","Habit breaking appliances","Space maintanence","Space regainers"],
    img: pedoImg
  },
  {
    heading: "Dental Implants",
    points: ["Single Tooth Implants","Immediate Implants", "Implant supported bridge"],
    img: implantImg
  },
  {
    heading: "Laser Dentistry",
    points: ["Laser Depigmentation", "Laser flap surgeries", "Laser PDT therapy","Frenectomy & Frenotomy","Laser Biopsy","Laser smile designing","Laser Bleaching"],
    img: laserImg
  },

  {
    heading: "Full Mouth Rehabilitation",
    points: ["Complete Dentures","Overdentures", "Implant supported overdentures","Hybrid dentures"],
    img: fmrImg
  },
  {
    heading: "Cosmetology",
    points: ["Micropigmentation : Eyebrows & Lips", "Medical Micropigmentation : Stretch marks,Vitiligo,Scars", "Eyelash Lift & Lash tint","Medi-Facial : Hydra Facial & Oxy-Geno Facial","Chemical Peels : Pigmentation Correction,Acne treatment,Dark circles correction","Micro needling","Derma Planning","Derma Suction","Mesotherapy : Face & Hair","Anti-Ageing treatment","Party Peel/Glow Peel","Skin Tag/Mole/Wart Removal","Plasma Pen Therapy","Acne Scar Treatment"],
    img: cosmetoImg
  }
];
const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="" />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            // Array(6).fill(null).map((_item,id) => (
              sections.map((section, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 11}>
                <div className="card shadow border-0 mb-5">
                  {/* <img src={img} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} /> */}
                  <img src={section.img} alt={section.heading} className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                  <h4 className="mt-4 mb-2">{section.heading}</h4>
                  <ul>
                  {section.points.map((point, index) => (
                    <li key={index}>{point}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              </div>
            // ))
          ))}
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the best</h2>
                  <p className='form-text'>.</p>
                   </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service