import { useRouter } from '../hooks/useRouter.jsx'
import styles from './Link.module.css'

export function Link({ href, children, className = '', ...restOfProps }) {
    const { navigateTo, currentPath } = useRouter()

    const handleClick = (event) => {
        event.preventDefault()
        navigateTo(href)
    }

    const isActive = href === currentPath

    const finalClassName = `
        ${styles.link} 
        ${isActive ? styles.active : ''} 
        ${className}
    `.trim()

    return (
        <a
            href={href}
            onClick={handleClick}
            className={finalClassName}
            {...restOfProps}
        >
            {children}
        </a>
    )
}