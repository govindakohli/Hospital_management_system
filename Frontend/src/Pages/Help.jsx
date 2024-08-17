import React from 'react'
import "./Help.css"
import { FaPhone, FaEnvelope, FaQuestionCircle, FaMapMarkerAlt, FaFileAlt, FaInfoCircle } from 'react-icons/fa';


function Help() {
  return (
    <div className="help-page">
      <div className="help-hero">
        <h1>How Can We Help You?</h1>
        <p>We're here to assist you with any questions or concerns you may have.</p>
      </div>

      <div className="help-content">
        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <FaQuestionCircle className="icon" />
            <h3>How do I book an appointment?</h3>
            <p>
              You can book an appointment online through our website or by calling our appointment line at (123) 456-7890. 
              Our staff will assist you in scheduling a convenient time with one of our healthcare professionals.
            </p>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="icon" />
            <h3>What insurance plans do you accept?</h3>
            <p>
              We accept a wide range of insurance plans. Please visit our Insurance Information page or contact our billing department at (123) 456-7890 for specific details regarding your plan.
            </p>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="icon" />
            <h3>Where are you located?</h3>
            <p>
              City Hospital is located at SCO 1234 Sector-16 , Chandigarh, India. You can find detailed directions on our Contact Us page.
            </p>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="icon" />
            <h3>What are your visiting hours?</h3>
            <p>
              Our general visiting hours are from 9:00 AM to 8:00 PM. However, certain departments may have specific visiting policies, so we recommend checking with the department directly.
            </p>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="icon" />
            <h3>How do I access my medical records?</h3>
            <p>
              You can access your medical records by submitting a request through our Medical Records department. Please visit our Medical Records page for more information or call (123) 456-7890.
            </p>
          </div>
        </section>

        <section className="help-section">
          <h2>Contact Support</h2>
          <div className="contact-support">
            <div className="support-item">
              <FaPhone className="icon" />
              <h4>Phone Support</h4>
              <p>Call us at +91 0011223344for immediate assistance with any inquiries or issues.</p>
            </div>
            <div className="support-item">
              <FaEnvelope className="icon" />
              <h4>Email Support</h4>
              <p>Send us an email at support@cityhospital.com, and we'll get back to you within 24 hours.</p>
            </div>
            <div className="support-item">
              <FaMapMarkerAlt className="icon" />
              <h4>Visit Us</h4>
              <p>Come to our main office at SCO 1234 Sector-17 , Chandigarh, India. for in-person assistance.</p>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2>Additional Resources</h2>
          <div className="resources">
            <div className="resource-item">
              <FaFileAlt className="icon" />
              <h4>Patient Resources</h4>
              <p>Access important forms, guides, and patient education materials to help you prepare for your visit.</p>
            </div>
            <div className="resource-item">
              <FaInfoCircle className="icon" />
              <h4>Insurance Information</h4>
              <p>Learn about the insurance plans we accept and how to manage your healthcare coverage with us.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Help
