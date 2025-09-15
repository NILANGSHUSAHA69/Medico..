 const doctors = [
            { name: "Dr. Emily Carter", specialist: "Cardiology" },
            { name: "Dr. Marcus Johnson", specialist: "Neurology" },
            { name: "Dr. Sophia Lee", specialist: "Pediatrics" },
            { name: "Dr. David Patel", specialist: "Orthopedics" },
            { name: "Dr. Olivia Garcia", specialist: "Dermatology" },
            { name: "Dr. Liam Wilson", specialist: "Oncology" }
        ];

        const form = document.getElementById('appointmentForm');
        const confirmationSection = document.getElementById('confirmationSection');
        const bookAnotherBtn = document.getElementById('bookAnother');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Generate unique patient ID
            const patientId = 'PT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
            document.getElementById('patientId').textContent = patientId;

            // Randomly assign doctor
            const assignedDoctor = doctors[Math.floor(Math.random() * doctors.length)];
            document.getElementById('doctorName').textContent = assignedDoctor.name;
            document.getElementById('specialist').textContent = assignedDoctor.specialist;

            // Display appointment date and time
            const dateValue = document.getElementById('date').value;
            const timeValue = document.getElementById('time').value;
            const dateTimeString = new Date(dateValue + ' ' + timeValue).toLocaleString();
            document.getElementById('appDateTime').textContent = dateTimeString;

            // Hide form and show confirmation
            form.parentElement.style.display = 'none';
            confirmationSection.style.display = 'block';
        });

        bookAnotherBtn.addEventListener('click', function() {
            confirmationSection.style.display = 'none';
            form.parentElement.style.display = 'block';
            form.reset();
        });