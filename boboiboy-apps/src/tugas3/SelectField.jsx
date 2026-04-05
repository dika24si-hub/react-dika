import React from 'react';

const SelectField = ({ label, value, onChange, options, error, required }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        {label} {required && <span style={{ color: '#f44336' }}>*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          border: error ? '2px solid #f44336' : '2px solid #e0e0e0',
          borderRadius: '10px',
          fontSize: '14px',
          boxSizing: 'border-box',
          backgroundColor: 'white'
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div style={{
          color: '#f44336',
          fontSize: '12px',
          marginTop: '5px',
          padding: '8px',
          background: '#ffebee',
          borderRadius: '5px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default SelectField;