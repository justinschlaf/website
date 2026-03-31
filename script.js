function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section, .hero-section');
    const body = document.body;

    if (sectionId === 'home') {
        body.classList.add('is-home');
    } else {
        body.classList.remove('is-home');
    }

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (sectionId === 'home') {
        activeSection.style.display = 'flex';
    } else {
        activeSection.style.display = 'block';
    }

    window.scrollTo(0, 0);
}

function openForm(serviceName) {
    document.getElementById('contactModal').style.display = 'block';
    document.getElementById('selectedService').innerText = serviceName;
    document.getElementById('serviceInput').value = serviceName;
}

function closeForm() {
    document.getElementById('contactModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeForm();
    }
}