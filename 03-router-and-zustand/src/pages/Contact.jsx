import { useContactForm } from "../hooks/useContactForm"

export function ContactPage() {

    const {
        name,
        email,
        message,
        successMessage,
        errors,
        handleNameChange,
        handleEmailChange,
        handleMessageChange,
        handleSubmit
    } = useContactForm()

    return <main>
        <section>
            <h1>Contacto</h1>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos a través del siguiente formulario:</p>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>

                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" value={message} onChange={handleMessageChange} ></textarea>
                    {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
}