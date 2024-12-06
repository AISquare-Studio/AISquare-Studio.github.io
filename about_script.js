document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('work-with-us-form');
  const thankYouMessage = document.getElementById('thank-you-message');
  const description = document.getElementById('work-description');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Optional: Send the form data to a server or Google Apps Script here
    const formData = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbwkn5dOailx_6-p3xPjxQlii7PnH0B2CRcs5KnOIxdQc8WlXuACP_C2QqCnHLRn7iCVCw/exec', {
       method: 'POST',
       body: formData
     }).then(response => {
       if (response.ok) {
         // Show Thank You message after successful submission
         form.classList.add('hidden');
         thankYouMessage.classList.remove('hidden');
         form.reset();
       }
    }).catch(error => console.error('Error:', error));
  });
});