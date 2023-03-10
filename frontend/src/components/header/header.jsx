import { Link, NavLink } from 'react-router-dom'
import mavisaWhiteLogo from '../../assets/img/logo-horiz.svg'
import '../../assets/css/main.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container mx-auto px-8">
                {/* header start */}                
                <nav className="px-2 sm:px-4 py-2.5 rounded">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link to="/" className="flex items-center">
                            <img src={mavisaWhiteLogo} alt="" />
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-primary">
                                <li>
                                    <NavLink to="/" className='py-2 px-5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:rounded-full transition ease-in-out'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/rdv" className='py-2 px-5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:rounded-full transition ease-in-out'>How To get a Visa RDV</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className='py-2 px-5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:rounded-full transition ease-in-out'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/support" className='py-2 px-5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:rounded-full transition ease-in-out'>Support</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* header end */}
            </div>
        </div>
    );
}

export default Header