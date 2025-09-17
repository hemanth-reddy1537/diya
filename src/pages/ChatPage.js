import React from 'react';
import Chatbot from '../components/Chatbot';
import { FaUser, FaBook, FaChartLine } from 'react-icons/fa';

function ChatPage({ onNavigate }) {
  return (
    <div className="chat-page-container">
      <div className="chat-main-area">
        <div className="chat-header">
          <div className="user-info">
            <span className="user-avatar">D</span>
            <div className="user-details">
              <h4>Diya</h4>
              <p>Student Support Companion</p>
            </div>
            <span className="online-status">Online</span>
          </div>
        </div>
        
        {/* The Chatbot component is now the main content area */}
        <Chatbot />
      </div>
      
      <div className="chat-sidebar">
        <div className="sidebar-section quick-actions">
          <h4>Quick Actions</h4>
          <ul>
            <li onClick={() => onNavigate('book-mentor')}><FaUser /><span>Book a Mentor</span></li>
            <li onClick={() => onNavigate('resources')}><FaBook /><span>Browse Resources</span></li>
            <li onClick={() => onNavigate('dashboard')}><FaChartLine /><span>View Progress</span></li>
          </ul>
        </div>
        
        <div className="sidebar-section today-tip">
          <h4>Today's Wellness Tip</h4>
          <p>Step outside for 5 minutes to reset your mood</p>
        </div>

        <div className="sidebar-section need-help">
          <h4>Need Help Now?</h4>
          <p>Crisis Text Line: Text HOME to 741741</p>
          <p>National Suicide Prevention: 988</p>
          <p>Campus Counseling: Contact your student services</p>
          <button className="get-help-button">Get Immediate Help</button>
        </div>
        
        <div className="sidebar-section mood-check">
          <h4>Quick Mood Check</h4>
          <p>How are you feeling right now?</p>
          <div className="mood-options">
            <button>Great</button>
            <button>Okay</button>
            <button>Down</button>
            <button>Anxious</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;