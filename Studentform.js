 import React, { useState } from 'react';

function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || course === '') {
      alert('All fields are required!');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Course:', course);

    // Clear form fields
    setName('');
    setEmail('');
    setCourse('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
