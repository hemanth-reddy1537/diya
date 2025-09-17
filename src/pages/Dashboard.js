import React from 'react';
import { FaHeart, FaStar, FaEnvelope } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for charts
const wellnessJourneyData = [
  { name: 'Sep 11', mood: 6 },
  { name: 'Sep 12', mood: 7 },
  { name: 'Sep 13', mood: 8 },
  { name: 'Sep 14', mood: 7 },
  { name: 'Sep 15', mood: 6.9 },
  { name: 'Sep 16', mood: 7.2 },
  { name: 'Sep 17', mood: 6.5 },
];

const weeklyChatData = [
  { name: 'Sep 11', messages: 4 },
  { name: 'Sep 12', messages: 5 },
  { name: 'Sep 13', messages: 7 },
  { name: 'Sep 14', messages: 8 },
  { name: 'Sep 15', messages: 9 },
  { name: 'Sep 16', messages: 6 },
  { name: 'Sep 17', messages: 7 },
];

function Dashboard({ userProfile }) {
  return (
    <div className="dashboard-page-container">
      <div className="loading-state">
        <FaHeart className="loading-icon" />
        <p>Loading your wellness data...</p>
      </div>

      <div className="dashboard-content">
        <h2>Welcome back, {userProfile.name}! 👋</h2>
        <div className="stats-cards-row">
          <div className="stat-card">
            <h4>Total Conversations</h4>
            <p>1</p>
          </div>
          <div className="stat-card">
            <h4>Days Active</h4>
            <p>1</p>
          </div>
          <div className="stat-card">
            <h4>Avg Mood</h4>
            <p>6.9/10</p>
          </div>
          <div className="stat-card">
            <h4>Wellness Streak</h4>
            <p>1 Day</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="chart-card your-journey">
            <h4>Your Wellness Journey</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={wellnessJourneyData}>
                <XAxis dataKey="name" />
                <YAxis domain={[1, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
            <p className="insight-text">Insight: Your mood has been averaging 6.9/10 this week. Keep up the great work on your wellness journey! 😊</p>
          </div>

          <div className="chart-card weekly-chat">
            <h4>Weekly Chat Activity</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyChatData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="messages" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="sidebar-right">
            <div className="daily-mood-check card">
              <h4>Daily Mood Check</h4>
              <p>How are you feeling today?</p>
              <p className="mood-score">7/10</p>
              <p className="mood-descriptor">Very Good</p>
              <button>Log Today's Mood</button>
            </div>
            
            <div className="letter-to-counselor card">
              <h4>Letter to Counselor</h4>
              <p>Generate a summary of your conversations to share with a counselor</p>
              <button className="generate-button">Generate Letter</button>
            </div>
            
            <div className="wellness-tip card">
              <h4>Wellness Tip</h4>
              <p className="tip-title">Practice Deep Breathing</p>
              <p className="tip-content">Take 4 deep breaths, inhaling for 4 counts, holding for 4, and exhaling for 4. This activates your parasympathetic nervous system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;