import React from 'react'
import "./About.css"
// import hospitalImage from './assets/hospital.jpg';
import { FaAward, FaUsers, FaHeartbeat, FaHospitalAlt } from 'react-icons/fa';
function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src="https://www.asterhospitals.in/sites/default/files/2021-11/aster-hospitals-best-hospital-in-india.jpg" alt="City Hospital" className="about-hero-image" />
        <div className="about-hero-text">
          <h1>Welcome to City Hospital</h1>
          <p>Your Health, Our Priority</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            City Hospital has been at the forefront of healthcare for over 30 years, providing exceptional medical services to our community. From our humble beginnings as a small clinic, we have grown into a state-of-the-art facility offering a wide range of specialized services.
            Our journey is rooted in a commitment to caring for our patients with compassion, innovation, and excellence.
          </p>
          <p>
            Over the years, we have expanded our facilities and services to meet the evolving needs of our patients. Today, we are proud to be a leader in healthcare, with a team of dedicated professionals who are passionate about improving lives and delivering the highest standards of care.
          </p>
        </section>

        <section className="about-section mission-vision">
          <div className="mission-vision-item">
            <FaHeartbeat className="icon" />
            <h3>Our Mission</h3>
            <p>
              To provide quality healthcare with compassion and excellence, and to continually improve the health and well-being of the communities we serve.
            </p>
          </div>
          <div className="mission-vision-item">
            <FaHospitalAlt className="icon" />
            <h3>Our Vision</h3>
            <p>
              To be a leading healthcare institution recognized for innovation, excellence, and patient-centered care, transforming the lives of our patients and the community.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="about-features">
            <div className="feature-item">
              <FaAward className="icon" />
              <h4>Experienced Professionals</h4>
              <p>
                Our team of doctors, nurses, and healthcare professionals are highly trained and experienced, ensuring that you receive the best care possible.
              </p>
            </div>
            <div className="feature-item">
              <FaUsers className="icon" />
              <h4>Comprehensive Services</h4>
              <p>
                From routine check-ups to advanced surgical procedures, we offer a full spectrum of medical services to meet your healthcare needs.
              </p>
            </div>
            <div className="feature-item">
              <FaHospitalAlt className="icon" />
              <h4>State-of-the-Art Facilities</h4>
              <p>
                Our hospital is equipped with the latest technology and modern amenities to ensure a comfortable and efficient experience for our patients.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Achievements</h2>
          <p>
            City Hospital has been recognized for its commitment to excellence in healthcare. We have received numerous awards for patient safety, quality of care, and innovation in medical services.
          </p>
          <p>
            Our hospital is accredited by leading healthcare organizations, and our staff is dedicated to maintaining the highest standards of care.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            At City Hospital, our team is our greatest asset. We have a diverse group of medical professionals who are leaders in their respective fields. Our collaborative approach ensures that our patients receive comprehensive and coordinated care.
          </p>
          <p>
            From our skilled surgeons to our compassionate nursing staff, every member of our team is committed to providing the best possible care for our patients.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            We are here to answer your questions and provide the support you need. Whether you have inquiries about our services or want to schedule an appointment, please don't hesitate to reach out to us.
          </p>
          <p>
            Phone: +91 0011223344<br />
            Email: cityhospital@hospital.com<br />
            Address: SCO 1234 Sector-16 , Chandigarh, India
          </p>
        </section>
      </div>
    </div>
  );

}

export default About
