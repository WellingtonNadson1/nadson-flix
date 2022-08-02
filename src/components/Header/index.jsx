import './styles.css'

export function Header() {
    return (
        <header className="header black">
            <div className="logo">
                <h2>NADSONFLIX</h2>
            </div>
            <div className="logo-user">
                <img src="src/assets/logoUser.svg" alt="Logo User" />
            </div>

        </header>
    )
}