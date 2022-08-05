import './styles.css'

export function Header({black}) {
    return (
        <header className={`header ${black ? 'black' : ''}`}>
            <div className="logo">
                <h2 className="text-[2.5rem] cursor-pointer hover:opacity-95 text-[#e50914] font-['Bebas_Neue']">NADSONFLIX</h2>
            </div>
            <div className="logo-user">
                <img src="/images/logoUser.svg" alt="Logo User" />
            </div>

        </header>
    )
}