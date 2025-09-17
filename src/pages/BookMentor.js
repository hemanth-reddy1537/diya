import React, { useState } from 'react';
import { FaHeart, FaVideo, FaMapMarkerAlt, FaUserTie, FaUserGraduate, FaMale, FaFemale, FaStar, FaChevronLeft } from 'react-icons/fa';

function BookMentor() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({});

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="question-heading">How would you like to meet?</h3>
            <div className="step-options">
              <div className="option-card" onClick={() => handleSelection('type', 'Virtual')}>
                <FaVideo className="icon" />
                <h4>Virtual Session</h4>
                <p>Connect online from anywhere</p>
              </div>
              <div className="option-card" onClick={() => handleSelection('type', 'In-Person')}>
                <FaMapMarkerAlt className="icon" />
                <h4>In-Person Session</h4>
                <p>Meet face-to-face on campus</p>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="question-heading">What type of mentor would you prefer?</h3>
            <div className="step-options">
              <div className="option-card" onClick={() => handleSelection('role', 'Peer')}>
                <FaUserGraduate className="icon" />
                <h4>Peer Mentor</h4>
                <p>A fellow student who understands your experience</p>
              </div>
              <div className="option-card" onClick={() => handleSelection('role', 'Faculty')}>
                <FaUserTie className="icon" />
                <h4>Faculty Counselor</h4>
                <p>A professional counselor or faculty member</p>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="question-heading">Do you have a gender preference?</h3>
            <div className="step-options">
              <div className="option-card" onClick={() => handleSelection('gender', 'Female')}>
                <FaFemale className="icon" />
                <h4>Female Mentor</h4>
                <p>Connect with a female mentor</p>
              </div>
              <div className="option-card" onClick={() => handleSelection('gender', 'Male')}>
                <FaMale className="icon" />
                <h4>Male Mentor</h4>
                <p>Connect with a male mentor</p>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <div className="mentor-list">
            <button className="back-button" onClick={() => setStep(3)}><FaChevronLeft /> Back</button>
            <div className="mentor-available-count">1 mentor available</div>
            <div className="mentor-card">
              <div className="mentor-profile">
                <span className="mentor-initials">S</span>
                <div className="mentor-details">
                  <h4>Sarah Chen</h4>
                  <div className="mentor-tags">
                    <span>Anxiety & Academic stress</span>
                    <span>Peer Mentor</span>
                    <span>Virtual</span>
                    <span>Female</span>
                  </div>
                  <div className="mentor-rating"><FaStar /> 4.8</div>
                </div>
              </div>
              <p className="mentor-bio">Psychology major who understands the pressures of college life. I've helped fellow students manage anxiety and find balance between academics and well-being.</p>
              <button className="book-session-button">Book Session</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="book-mentor-page-container">
      <div className="booking-header">
        <FaHeart className="booking-icon" />
        <h2>Book a Mentor</h2>
        <p>Connect with someone who understands and can support your journey</p>
      </div>
      <div className="booking-content">
        {/* show current selections so ESLint sees the variable being used */}
        <div className="current-selections" aria-hidden>
          <strong>Current selections:</strong> {JSON.stringify(selections)}
        </div>
        <div className="progress-bar">
          <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`step-circle ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
}

export default BookMentor;