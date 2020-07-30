import React, { Component } from 'react'

// WrapperComponent and axios instance is passed 
const WithErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
    
        //Error State
        state = {
            error: null
        }

        //Dealing with error , If there is an error it is passed to the state
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render () {
            return (
                <React.Fragment>
                    {this.state.error ? <h1 style={{display: "flex", justifyContent: "center", alignContent: "center"}}>{this.state.error.message}</h1> : null}
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    }

}

export default WithErrorHandler