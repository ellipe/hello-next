import Link from 'next/link';


const containerStyle = {
    display : 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
};

const linkStyle = {
    marginRight: 20
};

const Header = () => (
    <div style={containerStyle}>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={linkStyle}>About</a>
        </Link>
        <Link href='/login'>
            <a style={linkStyle}>Login</a>
        </Link>
    </div>
);



export default Header;