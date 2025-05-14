
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    country: 'Pakistan',
    city: form[1].value,
    fullName: form[2].value,
    passportNumber: form[3].value,
    issueDate: form[4].value,
    expiryDate: form[5].value,
    birthplace: form[6].value,
    issuePlace: form[7].value,
    testCity: form[8].value,
    destination: form[9].value,
    visaType: form[10].value,
    preferredDate: form[11].value,
    mobile: form[12].value,
    email: form[13].value
  };
  try {
    const res = await fetch('http://localhost:5000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      document.getElementById('confirmation').classList.remove('hidden');
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      alert('Error submitting appointment.');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong.');
  }
});
