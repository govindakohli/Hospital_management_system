import React from 'react'
import "./Department.css"
import { FaEye ,FaStethoscope, FaHeartbeat, FaBrain, FaChild, FaTeeth, FaUserMd, FaBone, FaCapsules } from 'react-icons/fa';

function Department() {
  return (
<div className="departments-section">
      <div className="departments-container">
        <h1 className="departments-title">Our Departments</h1>
        <p className="departments-intro">
          At City Hospital, we offer a comprehensive range of medical services, each backed by state-of-the-art facilities and a team of highly skilled professionals. Explore our departments to learn more about the specialized care we provide.
        </p>

        <div className="departments-grid">
          <div className="department-card">
            <FaStethoscope className="department-icon" />
            <h2>General Medicine</h2>
            <p>
              Our General Medicine department is dedicated to providing personalized care for a wide range of health concerns. Our experienced physicians are here to guide you towards a healthier life.
            </p>
          </div>
          <div className="department-card">
  <FaEye className="department-icon" />
  <h2>Ophthalmology</h2>
  <p>
    The Ophthalmology department offers comprehensive eye care services, from routine eye exams to advanced surgical procedures. Our specialists are dedicated to preserving and enhancing your vision.
  </p>
</div>

          <div className="department-card">
            <FaHeartbeat className="department-icon" />
            <h2>Cardiology</h2>
            <p>
              The Cardiology department offers the latest in heart care, from diagnostics to complex procedures. Our cardiologists are committed to ensuring your heart stays healthy and strong.
            </p>
          </div>

          <div className="department-card">
            <FaBrain className="department-icon" />
            <h2>Neurology</h2>
            <p>
              Our Neurology department specializes in the diagnosis and treatment of neurological disorders. We use advanced imaging and therapeutic techniques to provide comprehensive care.
            </p>
          </div>

          <div className="department-card">
            <FaChild className="department-icon" />
            <h2>Pediatrics</h2>
            <p>
              Our Pediatrics department is dedicated to the health and well-being of children. From routine check-ups to specialized treatments, our pediatricians ensure the best care for your little ones.
            </p>
          </div>

          <div className="department-card">
            <FaTeeth className="department-icon" />
            <h2>Dentistry</h2>
            <p>
              The Dentistry department provides a full range of dental services, including preventive, restorative, and cosmetic care. Our dentists are here to help you maintain a healthy, beautiful smile.
            </p>
          </div>

          <div className="department-card">
            <FaUserMd className="department-icon" />
            <h2>Orthopedics</h2>
            <p>
              Our Orthopedics department offers cutting-edge treatments for musculoskeletal issues. Whether it's a sports injury or a chronic condition, our orthopedic specialists are here to help you stay active.
            </p>
          </div>

          <div className="department-card">
            <FaBone className="department-icon" />
            <h2>Rheumatology</h2>
            <p>
              Our Rheumatology department is dedicated to the diagnosis and treatment of rheumatic diseases. We offer a comprehensive approach to managing arthritis and other joint-related conditions.
            </p>
          </div>
          <div className="department-card">
            <FaCapsules className="department-icon" />
            <h2>Pharmacy</h2>
            <p>
              The Pharmacy department provides a wide range of medications and pharmaceutical services. Our pharmacists work closely with your healthcare team to ensure you receive the best possible treatment.
            </p>
          </div>
        </div>

        <div className="department-extra">
          <h2>Why Choose Our Departments?</h2>
          <p>
            At City Hospital, each of our departments is committed to providing exceptional care tailored to meet your individual needs. We combine advanced technology, innovative treatments, and a compassionate approach to deliver the highest standard of healthcare. Our multidisciplinary teams work together to ensure that every patient receives comprehensive and coordinated care across all departments.
          </p>

          <div className="department-faq">
            <h3>Frequently Asked Questions</h3>
            <p><strong>What makes City Hospital’s departments unique?</strong></p>
            <p>
              Each department at City Hospital is staffed by experts in their field, equipped with the latest technology, and dedicated to patient-centered care. We focus on holistic treatment plans that address the root cause of health issues while providing compassionate support.
            </p>
            <p><strong>How do I book an appointment with a specific department?</strong></p>
            <p>
              You can easily book an appointment online through our website or by calling our appointment desk. Our patient services team will help you find the right specialist and schedule your visit at a convenient time.
            </p>
            <p><strong>Are there any special programs offered by your departments?</strong></p>
            <p>
              Yes, many of our departments offer specialized programs, such as cardiac rehabilitation, diabetes management, and wellness programs, designed to support your long-term health and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Department
