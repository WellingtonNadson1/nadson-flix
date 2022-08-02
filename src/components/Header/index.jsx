import './styles.css'

export function Header({black}) {
    return (
        <header className={`header ${black ? 'black' : ''}`}>
            <div className="logo">
                <h2>NADSONFLIX</h2>
            </div>
            <div className="logo-user">
                <img src="/images/logoUser.svg" alt="Logo User" />
            </div>

        </header>
    )
}