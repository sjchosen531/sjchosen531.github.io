import React, { useState } from 'react';

const AcademicHomepage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Sample data - you can replace with your own information
  const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    institution: "Your Institution",
    research: "Your research interests and focus areas",
    email: "your.email@example.com",
    profileImage: "/api/placeholder/200/200"
  };
  
  const publications = [
    {
      title: "Publication Title 1",
      authors: "Your Name, Co-author Name",
      journal: "Journal Name",
      year: "2023",
      link: "#"
    },
    {
      title: "Publication Title 2",
      authors: "Your Name, Other Co-authors",
      journal: "Another Journal",
      year: "2022",
      link: "#"
    }
  ];
  
  const teaching = [
    {
      code: "COURSE 101",
      title: "Introduction to Your Field",
      description: "A brief description of the course content and objectives."
    },
    {
      code: "COURSE 202",
      title: "Advanced Topics in Your Field",
      description: "A brief description of the advanced course."
    }
  ];
  
  const renderHome = () => (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img 
          src={personalInfo.profileImage} 
          alt={personalInfo.name} 
          className="w-48 h-48 rounded-md mb-4"
        />
        <div>
          <h1 className="text-3xl font-bold mb-1">{personalInfo.name}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{personalInfo.title}</h2>
          <h3 className="text-lg mb-4">{personalInfo.institution}</h3>
          <p className="text-gray-800 mb-4">{personalInfo.research}</p>
          <p className="text-gray-800">
            <strong>Email:</strong> {personalInfo.email}
          </p>
        </div>
      </div>
    </div>
  );
  
  const renderPublications = () => (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      <ul className="space-y-6">
        {publications.map((pub, index) => (
          <li key={index} className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
            <p className="text-gray-800 mb-1">{pub.authors}</p>
            <p className="text-gray-700 italic mb-1">{pub.journal}, {pub.year}</p>
            <a href={pub.link} className="text-blue-600 hover:underline">Link to publication</a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const renderTeaching = () => (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Teaching</h1>
      <ul className="space-y-6">
        {teaching.map((course, index) => (
          <li key={index} className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold mb-1">{course.code}: {course.title}</h3>
            <p className="text-gray-800">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const renderNavigation = () => (
    <nav className="bg-gray-100 p-4 border-b border-gray-300">
      <ul className="flex space-x-6">
        <li>
          <button 
            onClick={() => setCurrentPage('home')}
            className={`py-1 px-2 ${currentPage === 'home' ? 'font-bold border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage('publications')}
            className={`py-1 px-2 ${currentPage === 'publications' ? 'font-bold border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Publications
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage('teaching')}
            className={`py-1 px-2 ${currentPage === 'teaching' ? 'font-bold border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Teaching
          </button>
        </li>
      </ul>
    </nav>
  );
  
  const renderContent = () => {
    switch(currentPage) {
      case 'publications':
        return renderPublications();
      case 'teaching':
        return renderTeaching();
      default:
        return renderHome();
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen shadow-md">
      {renderNavigation()}
      {renderContent()}
      <footer className="p-4 mt-8 text-center text-gray-500 text-sm border-t border-gray-300">
        © {new Date().getFullYear()} {personalInfo.name} • Last updated: May 2025
      </footer>
    </div>
  );
};

export default AcademicHomepage;
