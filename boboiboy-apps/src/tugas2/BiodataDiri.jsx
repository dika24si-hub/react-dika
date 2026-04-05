import React from 'react';
import './Custom.css'; 

// Child component 1: Header
const ProfileHeader = ({ name, nim }) => {
  return (
    <div className="header">
      <h1>{name}</h1>
      <p>NIM: {nim}</p>
    </div>
  );
};

// Child component 2: Info Pribadi
const PersonalInfo = ({ data }) => {
  return (
    <div className="info-section">
      <div className="info-row">
        <span className="label">Nama Lengkap</span>
        <span className="value">{data.fullName}</span>
      </div>
      <div className="info-row">
        <span className="label">Tempat, Tgl Lahir</span>
        <span className="value">{data.birthPlace}, {data.birthDate}</span>
      </div>
      <div className="info-row">
        <span className="label">Alamat</span>
        <span className="value">{data.address}</span>
      </div>
    </div>
  );
};

// Child component 3: Pendidikan
const Education = ({ data }) => {
  return (
    <div className="education">
      <h3>🎓 Pendidikan</h3>
      <p><strong>{data.university}</strong></p>
      <p>{data.major}</p>
      <p className="year">{data.year}</p>
    </div>
  );
};

// Child component 4: Keahlian
const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h3>💻 Keahlian</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};

// Child component 5: Kontak
const Contact = ({ email, phone }) => {
  return (
    <div className="contact">
      <h3>📞 Kontak</h3>
      <p>📧 {email}</p>
      <p>📱 {phone}</p>
    </div>
  );
};

// Child component 6: Footer
const Footer = () => {
  return (
    <div className="footer">
      <p>© 2026 - Tugas Framework Lanjutan</p>
    </div>
  );
};

// Komponen Utama
const BiodataDiri = () => {
  const nama = "Dika";
  const nim = "2457301035";

  const personal = {
    fullName: "Dika Sinambela",
    birthPlace: "Riau",
    birthDate: "28 Oktober 2005",
    address: "Jl. Berdikari, Rumbai"
  };

  const educationData = {
    university: "Politeknik Caltex riau",
    major: "Sistem Informasi",
    year: "2024 - Sekarang"
  };

  const skillList = ["React JS", "JavaScript", "HTML/CSS", "Git"];

  const email = "dika24si@mahasiswa.pcr.ac.id";
  const phone = "0812-6197-1655";

  return (
    <div className="biodata-card">
      <ProfileHeader name={nama} nim={nim} />
      <PersonalInfo data={personal} />
      <Education data={educationData} />
      <Skills skills={skillList} />
      <Contact email={email} phone={phone} />
      <Footer />
    </div>
  );
};

export default BiodataDiri;