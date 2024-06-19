document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Gather form data

        // Convert FormData to an object
        const data = Object.fromEntries(formData.entries());

        console.log(data); // {name: "value", email: "value"}

        // Optionally, send the data to a server
        try {
            const response = await fetch('https://base.astralta.com:443/api/collections/6_playlabs_list/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            ;

            const result = await response.json();
            console.log('Server response:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
