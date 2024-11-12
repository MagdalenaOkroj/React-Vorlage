import './Header.css';

const Header = ({text, subText}) => {
    return(
    
    <header className='header'>
        <h1>Header Section here</h1>
        <h1>{text}</h1>
        <h3>{subText}</h3>

    </header>)
}

export default Header