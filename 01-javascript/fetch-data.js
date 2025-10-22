const container = document.querySelector('.jobs-listings');
const navigation = document.querySelector('.pagination');

const RESULTS_PER_PAGE = 3

fetch('./data.json')
    .then(response => response.json())
    .then(jobs => {
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = 'job-listing-card'
            article.dataset.modalidad = job.data.modalidad;
            article.dataset.technology = job.data.technology;
            article.dataset.experiencia = job.data.nivel;

            article.innerHTML = `
                    <div>
                        <h3>${job.titulo}</h3>
                        <small>${job.empresa} | ${job.ubicacion}</small>
                        <p>${job.descripcion}</p>
                    </div>
                    <button class="button-apply-job">Aplicar</button>
            `
            container.appendChild(article)
            // Paginar si el contenedor principal añade más de 2 hijos, crear una nueva pagina y agregar el articulo a la nueva pagina


        })
    }).then(() => {
        const jobs = Array.from(container.children);
        const navigation = document.querySelector('.pages');
        const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);
        let currentPage = 1;
        for (let i = 0; i < totalPages; i++) {
            const page = i + 1;
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = page;
            if (page === currentPage) {
                pageLink.classList.add('is-active');
            }
            navigation.appendChild(pageLink);
        };





    });
