import React from 'react'
import Title from "../components/Title";
import Certificate from "./Certificate";
import HTMLCSS from "../assets/img/certificateHTML.png";
import PHP from "../assets/img/certificatePHP.png";
import CISCO from "../assets/img/certificateCISCO.png";
import clsx from 'clsx';


const CertificateSec = () => {
  return (
    <section id='certificates' className={clsx(' pt-22 ', 'max-md:text-center')}>

      <Title text='Certificates' />
      <Certificate text='Completed an in-depth course focused on modern HTML5, CSS3, and responsive web design. Gained hands-on experience by building a fully functional, real-world website from scratch, applying flexbox, CSS Grid, media queries, and best practices for clean, maintainable code.' title='Build Responsive Real-World Websites with HTML and CSS' image={HTMLCSS} link='https://www.udemy.com/certificate/UC-c09808c5-73d6-47d9-8f27-e42749cc655e/' />
      <Certificate text='Completed a comprehensive course covering PHP fundamentals to advanced concepts. Learned to build dynamic web applications using core PHP, handle form validation, interact with MySQL databases, and apply object-oriented programming principles in real-world projects.' title='PHP From Scratch: Beginner to Advanced' image={PHP} link='https://www.udemy.com/certificate/UC-46cf6eea-e7a3-49bc-8160-3ca4bc56ec1e/' />
      <Certificate text='Completed as part of a college-level course during the third year of study. Gained foundational knowledge of networking concepts including network architecture, protocols, IP addressing, Ethernet, and basic configuration of routers and switches using Cisco Packet Tracer.' title='CCNAv7: Introduction to Networks' link='https://github.com/charliesumalag/portfolio-certificates/blob/main/CISCO%20CERTIFICATE.pdf' image={CISCO} />


    </section>
  )
}

export default CertificateSec

// https://www.udemy.com/certificate/UC-46cf6eea-e7a3-49bc-8160-3ca4bc56ec1e/
// https://www.udemy.com/certificate/UC-c09808c5-73d6-47d9-8f27-e42749cc655e/
