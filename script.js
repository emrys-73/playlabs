function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const emailField = document.querySelector('.newsletter-form-field-element[name="email"]');

    const form = document.getElementById('myForm');
    // const email = emailField.value; // Get the email value from the form

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data)

    // Send the data to PocketBase
    fetch('https://base.astralta.com:443/api/collections/6_playlabs_list/records', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for subscribing!');
        // Optionally, reset the form or show a success message
        document.querySelector('.newsletter-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your subscription.');
    });

    return false; // Prevent default form submission behavior
}
