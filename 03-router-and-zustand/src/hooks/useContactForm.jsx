
import { useEffect, useState } from 'react';

export function useContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log('3. Estado actualizado (en useEffect):', errors) // ← Valor ACTUAL
    }, [errors]);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "El nombre es obligatorio.";
        }
        if (!email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        }
        if (!message.trim()) {
            newErrors.message = "El mensaje es obligatorio.";
        }
        setErrors(newErrors);

        console.log('1. Estado (errors):', errors)        // ← Valor ANTERIOR
        console.log('2. Variable local (newErrors):', newErrors)  // ← Valor ACTUAL
        return Object.keys(newErrors).length === 0;
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            console.log("Errores de validación:", newErrors);
            return;
        }

        console.log("Formulario enviado:", { name, email, message });
        setSuccessMessage('¡Mensaje enviado correctamente! Gracias por contactarnos.')
        resetForm();

    };

    return {
        name,
        email,
        message,
        successMessage,
        errors,
        handleNameChange,
        handleEmailChange,
        handleMessageChange,
        handleSubmit,
    }
}