import React from "react";
import "./Biography.css";
import {
  FaMedkit,
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaHospital,
  FaHandHoldingHeart
} from "react-icons/fa";

function Biography() {
  return (
    <section className="biography-section">
      <div className="bio-container">
        <h1 className="bio-title">Our Legacy</h1>
        <p className="bio-intro">
          City Hospital has been a beacon of hope and health for decades. Our
          commitment to delivering exceptional healthcare services has made us a
          trusted name in the industry. Here's a look at our journey and the
          people who have made it possible.
        </p>

        <div className="bio-content">
          <div className="bio-item">
            <FaMedkit className="bio-icon" />
            <h2>Foundation & Vision</h2>
            <p>
              Established in 1990, City Hospital started with a vision to make
              quality healthcare accessible to everyone. Over the years, we have
              expanded our services, embraced the latest technologies, and built
              a team of experts who share our passion for care.
            </p>
          </div>

          <div className="bio-item">
            <FaHeartbeat className="bio-icon" />
            <h2>Milestones & Achievements</h2>
            <p>
              From pioneering medical procedures to winning national awards for
              excellence, City Hospital has consistently set benchmarks in the
              healthcare industry. Our achievements are a testament to our
              dedication to saving lives and improving the quality of care.
            </p>
          </div>

          <div className="bio-item">
            <FaUserMd className="bio-icon" />
            <h2>Our Experts</h2>
            <p>
              Our team comprises some of the most respected doctors and medical
              professionals in the country. Each of them brings a wealth of
              experience, expertise, and a commitment to patient care that is
              second to none.
            </p>
          </div>

          <div className="bio-item">
            <FaAward className="bio-icon" />
            <h2>Awards & Recognitions</h2>
            <p>
              City Hospital has been recognized for its excellence in healthcare
              delivery, research, and innovation. Our accolades include national
              and international awards, reflecting our unwavering commitment to
              quality and patient satisfaction.
            </p>
          </div>

          <div className="bio-item">
            <FaHospital className="bio-icon" />
            <h2>State-of-the-Art Facilities</h2>
            <p>
              Our hospital is equipped with the latest medical technology and
              facilities to provide top-notch care. From advanced diagnostic
              tools to cutting-edge surgical equipment, we ensure our patients
              receive the best possible treatment.
            </p>
          </div>
          <div className="bio-item">
            <FaHandHoldingHeart className="bio-icon" />
            <h2>Community Engagement</h2>
            <p>
              City Hospital is deeply committed to giving back to the community.
              Through various outreach programs, health camps, and charitable
              initiatives, we strive to improve the overall health and
              well-being of the communities we serve. Our efforts in promoting
              health awareness and providing accessible medical services to
              underserved populations have made a significant impact over the
              years.
            </p>
          </div>
        </div>
      </div>

      <div className="bio-history">
        <h2>Our History</h2>
        <div className="history-timeline">
          <div className="history-event">
            <h3>1990</h3>
            <p>
              City Hospital was founded with a mission to provide quality
              healthcare to the community. Starting with just 50 beds, we began
              our journey towards becoming a leading healthcare provider.
            </p>
          </div>
          <div className="history-event">
            <h3>2000</h3>
            <p>
              We expanded our services to include specialized departments such
              as Cardiology, Neurology, and Pediatrics, offering comprehensive
              care to our patients.
            </p>
          </div>
          <div className="history-event">
            <h3>2010</h3>
            <p>
              City Hospital was awarded the National Healthcare Excellence Award
              for our outstanding contributions to medical research and patient
              care.
            </p>
          </div>
          <div className="history-event">
            <h3>2020</h3>
            <p>
              We inaugurated our new state-of-the-art facility, featuring the
              latest in medical technology and patient care amenities,
              reaffirming our commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="bio-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt="Doctor"
              className="team-img"
            />
            <h3>Dr. Aman Singh</h3>
            <p>Chief Surgeon</p>
          </div>

          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg"
              alt="Doctor"
              className="team-img"
            />
            <h3>Dr. Vivek Aryan</h3>
            <p>Cardiologist</p>
          </div>

          <div className="team-member">
            <img
              src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"
              alt="Doctor"
              className="team-img"
            />
            <h3>Dr. Shivani Rana</h3>
            <p>Pediatrician</p>
          </div>

          <div className="team-member">
            <img
              src="https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9128.jpg"
              alt="Doctor"
              className="team-img"
            />
            <h3>Dr. Venkatesh Iyer</h3>
            <p>Neurologist</p>
          </div>
        </div>
      </div>

      <div className="bio-testimonials">
        <h2>Patient Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "City Hospital saved my life. The doctors and nurses were
              incredibly supportive and professional throughout my treatment. I
              am forever grateful for their care and dedication."
            </p>
            <h4>- Sara sharma</h4>
          </div>
          <div className="testimonial">
            <p>
              "The facilities at City Hospital are top-notch. I felt comfortable
              and well taken care of during my stay. The staff's attention to
              detail and compassion made all the difference."
            </p>
            <h4>- vivek kumar</h4>
          </div>
          <div className="testimonial">
            <p>
              "From the moment I walked into City Hospital, I knew I was in good
              hands. The medical team was thorough and attentive, ensuring I
              received the best possible care."
            </p>
            <h4>- Prerna verma</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Biography;
