document.getElementById('workout-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 
   

const date = document.getElementById('date').value;
const workoutmins = document.getElementById('workoutmins').value;
const workouttype = document.getElementById('workouttype').value;

    try {
        const response = await fetch('/add', {
            method: 'POST',
            body: JSON.stringify({ date, 
                workoutmins, 
                workouttype }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.error('Error adding workout:', error);
    }
});