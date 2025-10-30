const filterLocation = document.querySelector('#filter-location')
const filterTechnology = document.querySelector('#filter-technology')
const filterExperience = document.querySelector('#filter-experience-level')
const mensaje = document.querySelector('#filter-selected-value')
const searchInput = document.querySelector('#search-input')

filterLocation.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterLocation.value

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = ''
    }

    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const modalidad = job.getAttribute('data-modalidad')

        const isShown = selectedValue === '' || selectedValue === modalidad


        job.classList.toggle('is-hidden', !isShown);
    })
})

filterTechnology.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterTechnology.value

    jobs.forEach(job => {
        const tecnologia = job.getAttribute('data-technology').split(',')

        const isShown = selectedValue === '' || tecnologia.includes(selectedValue)

        job.classList.toggle('is-hidden', !isShown);
    })
})

filterExperience.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterExperience.value

    jobs.forEach(job => {
        const experiencia = job.getAttribute('data-experiencia')

        const isShown = selectedValue === '' || selectedValue === experiencia

        job.classList.toggle('is-hidden', !isShown);
    })
})

searchInput.addEventListener('input', updateJobs)

function updateJobs(e) {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = e.target.value
    jobs.forEach(job => {
        const title = job.querySelector('h3').textContent.toLowerCase()

        const isShown = title.includes(selectedValue.toLowerCase())

        job.classList.toggle('is-hidden', !isShown);
    })
}
