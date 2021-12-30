import headerStyles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                This is heading
            </h1>
            <p className={headerStyles.description}>
                This is description.
            </p>
        </div>
    )
}
