
// script.js

// Add event listener to submit button
document.querySelector('button[type="submit"]').addEventListener('click', submitForm);

// Function to handle form submission
function submitForm(e) {
    e.preventDefault();
    // Get form data
    const formData = {
        // Add form data here
    };
    // Send form data to server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', navigate);
});

// Function to handle navigation
function navigate(e) {
    e.preventDefault();
    // Get link href
    const href = e.target.getAttribute('href');
    // Scroll to section
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to section buttons
document.querySelectorAll('section button').forEach(button => {
    button.addEventListener('click', sectionButton);
});

// Function to handle section button click
function sectionButton(e) {
    // Get section id
    const sectionId = (link unavailable);
    // Toggle section visibility
    document.querySelector(`#${sectionId}`).classList.toggle('visible');
}



// Add event listener to terms and conditions
document.getElementById('agree-terms').addEventListener('change', (e) => {
    const agreed = e.target.checked;
    const submitButton = document.getElementById('submit-btn');

    if (agreed) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});


// JavaScript code
document.querySelectorAll('input').forEach(input => {
	input.addEventListener('focus', () => {
		input.scrollIntoView({ behavior: 'smooth' });
	});
});

const numDependentsInput = document.getElementById('num-dependents');
const dependentDetailsContainer = document.getElementById('dependent-details');
const numBusinessesInput = document.getElementById('num-businesses');
const businessDetailsContainer = document.getElementById('business-details');

numDependentsInput.addEventListener('input', (e) => {
    const numDependents = parseInt(e.target.value);
    dependentDetailsContainer.innerHTML = '';
    for (let i = 0; i < numDependents; i++) {
        const dependentDetails = `
            <div class="form-group">
                <label class="label" for="dependent-name-${i}">Dependent Name:</label>
                <input class="input" type="text" id="dependent-name-${i}" />
            </div>
            <div class="form-group">
                <label class="label" for="dependent-surname-${i}">Dependent Surname:</label>
                <input class="input" type="text" id="dependent-surname-${i}" />
            </div>
            <div class="form-group">
                <label class="label" for="dependent-id-number-${i}">Dependent Identity Number:</label>
                <input class="input" type="number" id="dependent-id-number-${i}" />
            </div>
        `;
        dependentDetailsContainer.insertAdjacentHTML('beforeend', dependentDetails);
    }
});

numBusinessesInput.addEventListener('input', (e) => {
    const numBusinesses = parseInt(e.target.value);
    businessDetailsContainer.innerHTML = '';
    for (let i = 0; i < numBusinesses; i++) {
        const businessDetails = `
            <div class="form-group">
                <label class="label" for="business-owner-name-${i}">Business Owner Name:</label>
                <input class="input" type="text" id="business-owner-name-${i}" />
            </div>
            <div class="form-group">
                <label class="label" for="business-owner-id-${i}">Business Owner Identity Number/Foreign Document:</label>
                <input class="input" type="text" id="business-owner-id-${i}" />
            </div>
            <div class="form-group">
                <label class="label" for="business-type-${i}">Business Type:</label>
                <select class="input" id="business-type-${i}">
                    <option value="">Select</option>
                    <option value="sole-proprietor">Sole Proprietor</option>
                    <option value="partnership">Partnership</option>
                    <option value="company">Company</option>
                </select>
            </div>
        `;
        businessDetailsContainer.insertAdjacentHTML('beforeend', businessDetails);
    }
});

// Add event listener for Enter key press
numDependentsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        numDependentsInput.dispatchEvent(new Event('input'));
    }
});

numBusinessesInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        numBusinessesInput.dispatchEvent(new Event('input'));
    }
});
const dependentInput = document.getElementById('number-of-dependents');
const businessInput = document.getElementById('number-of-businesses');
const dependentInfo = document.getElementById('dependent-info');
const businessInfo = document.getElementById('business-info');

dependentInput.addEventListener('input', (e) => {
    const numDependents = e.target.value;
    dependentInfo.innerHTML = '';
    for (let i = 0; i < numDependents; i++) {
        const dependentContainer = document.createElement('div');
        dependentContainer.classList.add('dependent-container');
        dependentContainer.innerHTML = `
            <label>Dependent Name:</label>
            <input type="text">
            <label>Dependent Surname:</label>
            <input type="text">
            <label>Dependent Date of Birth:</label>
            <input type="date">
            <label>Dependent Gender:</label>
            <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label>Dependent Identity Number:</label>
            <input type="text">
            <label>Dependent Tax Reference Number:</label>
            <input type="text">
        `;
        dependentInfo.appendChild(dependentContainer);
    }
});

businessInput.addEventListener('input', (e) => {
    const numBusinesses = e.target.value;
    businessInfo.innerHTML = '';
    for (let i = 0; i < numBusinesses; i++) {
        const businessContainer = document.createElement('div');
        businessContainer.classList.add('business-container');
        businessContainer.innerHTML = `
            <label>Business Owner Name:</label>
            <input type="text">
            <label>Business Owner Surname:</label>
            <input type="text">
            <label>Business Owner Date of Birth:</label>
            <input type="date">
            <label>Business Owner Identity Number/Permit:</label>
            <input type="text">
            <label>Business Permit Number:</label>
            <input type="text">
            <label>Business Owner Tax Reference Number:</label>
            <input type="text">
            <label>Number of Dependents:</label>
            <input type="number">
        `;
        businessInfo.appendChild(businessContainer);
    }
});
const identityNumberInput = document.getElementById('identity-number');

identityNumberInput.addEventListener('input', () => {
    const identityNumber = identityNumberInput.value;
    if (identityNumber.length > 0) {
        const applicationNumber = generateApplicationNumber(identityNumber);
        document.getElementById('application-number').value = applicationNumber;
        identityNumberInput.style.display = 'none';
    }
});

function generateApplicationNumber(identityNumber) {
    // Simple example, you can modify this to fit your needs
    return `APP-${identityNumber}-${new Date().getTime()}`;
}

  const inputField = document.getElementById('small-input-1');
  const errorMessage = document.getElementById('error-message');
  
  inputField.addEventListener('input', () => {
  if (inputField.value.length > 0 && !inputField.value.match(/[0-9]+/)) {
  errorMessage.style.display = 'block';
  } else {
  errorMessage.style.display = 'none';
  }
  });
   // Generate unique application number
   let applicationNumber = '';
   
   document.getElementById('applicant-id-number').addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
   const identityNumber = document.getElementById('applicant-id-number').value;
   if (identityNumber.length === 13) {
   applicationNumber = generateApplicationNumber();
   document.getElementById('application-number').textContent = 'Application Number: ' + applicationNumber;
   } else {
   displayFieldError('applicant-id-number', 'Identity number should be 13 digits.');
   }
   }
   });
   document.getElementById('preview-btn').addEventListener('click', () => {
   const previewContent = document.getElementById('preview-content');
   previewContent.innerHTML = '';
   
   // Get the captured data from the forms
   const formData = {};
   const forms = document.querySelectorAll('form');
   forms.forEach((form) => {
   const formDataEntries = new FormData(form).entries();
   formDataEntries.forEach(([key, value]) => {
   formData[key] = value;
   });
   });
   
   // Display the captured data in the preview modal
   Object.keys(formData).forEach((key) => {
   const value = formData[key];
   previewContent.innerHTML += `<p>${key}: ${value}</p>`;
   });
   
   // Show the preview modal
   document.getElementById('preview-modal').style.display = 'block';
   });