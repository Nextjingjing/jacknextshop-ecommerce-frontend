import logo from '../../assets/logo.svg'

export const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-white text-xl font-bold">Jack & Next</span>
        </div>
    )
}
