import styles from "./SearchForm.module.css"
import { useId, useState } from "react"

export function SearchFormSection({ onSearch }) {
  const idText = useId()
  const idTechnology = useId()
  const idLocation = useId()
  const idExperienceLevel = useId()

  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const filters = {
      text: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    }

    onSearch(filters)
  }
  return (
    <section className={styles.jobsSearch}>
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
        <div className={styles.searchBar} style={{
          border: isFocused ? '2px solid #0066ff' : '1px solid #e0e0e0',
          transition: 'border 0.2s ease'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>


          <input
            name={idText} id="empleos-search-input" type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <button type="submit" style={{ position: 'absolute', right: '4px' }}>Buscar</button>
        </div>

        {isFocused && (
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginTop: '8px',
            marginBottom: '8px'
          }}>
            💡 Prueba buscar por título de trabajo, tecnología o nombre de empresa
          </p>
        )}

        <div className={styles.searchFilters}>
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>

      <span id="filter-selected-value"></span>
    </section>
  )
}