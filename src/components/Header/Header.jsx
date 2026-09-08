import './header.scss';
import { useCategoryStore } from '../../store/store';
import { Link } from 'react-router-dom';

const Header = () => {
    const categories = useCategoryStore(s => s.categories);
    return (
        <header className='header'>
            <div className="container header-container">
                <h2 className='header-logo'>
                    <Link to={'/'}>Shop</Link>
                </h2>

                <nav className="header-nav">
                    <Link className='header-nav-link' to={'/'}>home</Link>
                    {
                        categories.map(item =>{
                            return <Link key={item} className='header-nav-link' to={`/category/${item}`}>{item}</Link>
                        })
                    }
                    
                    <Link className='header-nav-link' to={'/cart'}>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
