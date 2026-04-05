import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

const FormValidasi = () => {
  const [nama, setNama] = useState('');
  const [usia, setUsia] = useState('');
  const [email, setEmail] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [semester, setSemester] = useState('');

  const [errorNama, setErrorNama] = useState('');
  const [errorUsia, setErrorUsia] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorJurusan, setErrorJurusan] = useState('');
  const [errorSemester, setErrorSemester] = useState('');

  const [showResult, setShowResult] = useState(false);

  // Validasi Nama
  const validateNama = (value) => {
    if (!value) return 'Nama wajib diisi';
    if (/[0-9]/.test(value)) return 'Nama tidak boleh mengandung angka';
    if (value.length < 3) return 'Nama minimal 3 karakter';
    return '';
  };

  // Validasi Usia
  const validateUsia = (value) => {
    if (!value) return 'Usia wajib diisi';
    if (isNaN(value)) return 'Usia harus berupa angka';
    if (value < 17) return 'Usia minimal 17 tahun';
    if (value > 60) return 'Usia maksimal 60 tahun';
    return '';
  };

  // Validasi Email
  const validateEmail = (value) => {
    if (!value) return 'Email wajib diisi';
    if (!value.includes('@') || !value.includes('.')) return 'Email tidak valid';
    return '';
  };

  const isFormValid = () => {
    return (
      nama !== '' && !errorNama &&
      usia !== '' && !errorUsia &&
      email !== '' && !errorEmail &&
      jurusan !== '' &&
      semester !== ''
    );
  };

  const handleSubmit = () => {
    const errNama = validateNama(nama);
    const errUsia = validateUsia(usia);
    const errEmail = validateEmail(email);
    const errJurusan = jurusan === '' ? 'Jurusan harus dipilih' : '';
    const errSemester = semester === '' ? 'Semester harus dipilih' : '';

    setErrorNama(errNama);
    setErrorUsia(errUsia);
    setErrorEmail(errEmail);
    setErrorJurusan(errJurusan);
    setErrorSemester(errSemester);

    if (!errNama && !errUsia && !errEmail && !errJurusan && !errSemester) {
      setShowResult(true);
    }
  };

  const jurusanOptions = [
    { value: "", label: "-- Pilih Jurusan --" },
    { value: "Teknik Informatika", label: "Teknik Informatika" },
    { value: "Sistem Informasi", label: "Sistem Informasi" },
    { value: "Teknik Komputer", label: "Teknik Komputer" },
    { value: "Manajemen Informatika", label: "Manajemen Informatika" }
  ];

  const semesterOptions = [
    { value: "", label: "-- Pilih Semester --" },
    { value: "1", label: "Semester 1" },
    { value: "2", label: "Semester 2" },
    { value: "3", label: "Semester 3" },
    { value: "4", label: "Semester 4" },
    { value: "5", label: "Semester 5" },
    { value: "6", label: "Semester 6" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>📝 Form Pendaftaran Mahasiswa</h1>
        <p>Isi data diri dengan lengkap dan benar</p>
      </div>

      <div style={styles.formBody}>
        <InputField
          label="Nama Lengkap"
          type="text"
          value={nama}
          onChange={(value) => {
            setNama(value);
            setErrorNama(validateNama(value));
          }}
          placeholder="Masukkan nama lengkap"
          error={errorNama}
          required
        />

        <InputField
          label="Usia"
          type="number"
          value={usia}
          onChange={(value) => {
            setUsia(value);
            setErrorUsia(validateUsia(value));
          }}
          placeholder="Masukkan usia"
          error={errorUsia}
          required
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(value) => {
            setEmail(value);
            setErrorEmail(validateEmail(value));
          }}
          placeholder="Masukkan email"
          error={errorEmail}
          required
        />

        <SelectField
          label="Jurusan"
          value={jurusan}
          onChange={(value) => {
            setJurusan(value);
            setErrorJurusan('');
          }}
          options={jurusanOptions}
          error={errorJurusan}
          required
        />

        <SelectField
          label="Semester"
          value={semester}
          onChange={(value) => {
            setSemester(value);
            setErrorSemester('');
          }}
          options={semesterOptions}
          error={errorSemester}
          required
        />

        {isFormValid() && (
          <button style={styles.submitBtn} onClick={handleSubmit}>
            ✅ Submit Pendaftaran
          </button>
        )}

        {showResult && (
          <div style={styles.resultCard}>
            <h3>🎉 Pendaftaran Berhasil!</h3>
            <div style={styles.resultDetail}>
              <p><strong>Nama:</strong> {nama}</p>
              <p><strong>Usia:</strong> {usia} tahun</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Jurusan:</strong> {jurusan}</p>
              <p><strong>Semester:</strong> {semester}</p>
            </div>
            <div style={styles.successMsg}>
              ✅ Terima kasih telah mendaftar!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '550px',
    margin: '50px auto',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '30px',
    textAlign: 'center'
  },
  formBody: {
    padding: '30px'
  },
  submitBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  },
  resultCard: {
    marginTop: '30px',
    padding: '20px',
    background: '#e8f5e9',
    borderRadius: '15px'
  },
  resultDetail: {
    background: 'white',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '15px'
  },
  successMsg: {
    background: '#4caf50',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center'
  }
};

export default FormValidasi;