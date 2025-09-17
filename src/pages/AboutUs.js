import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './AboutUs.css'; // New CSS for this page
import hemanthPhoto from '../assets/hemanth.png';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Hemanth Mummareddy',
      photo: hemanthPhoto, // Placeholder image URL
      role: 'Full-stack Developer & Team Lead',
      description: 'As the Team Lead, I drive the development of both the front-end and back-end, ensuring a seamless and responsive user experience from start to finish. I\'m passionate about leveraging technology to create impactful solutions.',
      linkedin: 'https://www.linkedin.com/in/hemanth-mummareddy',
      github: 'https://github.com/hemanth-reddy1537',
    },
    {
      name: 'Member 2',
      photo: 'https://via.placeholder.com/150',
      role: 'Backend Developer',
      description: 'A brief description of the member and their role.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Member 3',
      photo: 'https://via.placeholder.com/150',
      role: 'UI/UX Designer',
      description: 'A brief description of the member and their role.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Member 4',
      photo: 'https://via.placeholder.com/150',
      role: 'Project Manager',
      description: 'A brief description of the member and their role.',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Member 5',
      photo: 'https://via.placeholder.com/150',
      role: 'Data Scientist',
      description: 'A brief description of the member and their role.',
      linkedin: '#',
      github: '#',
    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h2>About Us</h2>
        <p>We are a group of five members passionate about improving mental health for students.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;