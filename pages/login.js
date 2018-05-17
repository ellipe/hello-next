import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { userSignIn } from '../store'

class Login extends React.Component {

    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req
        return {}
    }

    componentDidMount() {
        const { dispatch, username, password } = this.props
        console.log("Initial username and password: ", username)
        
    }

    handleSubmit = (e) => {
        const { dispatch } = this.props
        console.log('submitted')
        dispatch(userSignIn({ username: 'demo', password: 'demo_pass' }))
    }

    render() {
        return (
            <Layout>
                <input type="text" placeholder='Usuario'/>
                <input type="password" placeholder='Contraseña'/>
                <input type="submit" name="submit" onClick={this.handleSubmit}/>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    const { username, password } = state.auth
    return { username, password } 
} 

export default connect(mapStateToProps) (Login)