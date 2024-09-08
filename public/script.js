// public/script.js
document.getElementById('entryForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const Gender = document.getElementById('gender').value;
    const DOB = document.getElementById('dob').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const alternate_phonenumber = document.getElementById('alternatenumber').value;
    const branch = document.getElementById('branch').value;
    const batch = document.getElementById('batch').value;
    const graduationYear = document.getElementById('graduationYear').value;
    var Date_time_ofEntry=Date()
    const interestCheckbox = document.getElementById('interest');
    const interest = interestCheckbox.checked ? 'interested' : 'not interested';
    try {
      const response = await fetch('/api/alumni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,Gender,DOB, email,phonenumber,alternate_phonenumber,branch,batch,graduationYear,Date_time_ofEntry,interest})
      });
      
      if (response.ok) {
        alert('Alumni entry submitted successfully!');
        document.getElementById('entryForm').reset();
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred while submitting alumni entry. Please try again.');
    }
  });
  