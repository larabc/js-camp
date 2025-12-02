import { Link as NavLink } from 'react-router'
import styles from './Link.module.css'

export function Link({ href, children, className = '', ...restOfProps }) {
    return (
        <NavLink
            to={href}
            className={`${styles.link} ${className}`}
            {...restOfProps}
        >
            {children}
        </NavLink>
    )
}