import Header from './Header';
import Divisor from './Divisor';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    background: '#EEE'
};

const Layout = (props) => (
    <div style={containerStyle}>
        <Header />
        <Divisor />
        {props.children}
    </div>
);

export default Layout;