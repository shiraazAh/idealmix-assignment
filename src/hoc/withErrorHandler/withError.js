import React, { Component } from 'react'


const WithErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

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

        errorhandler = () => {
            this.setState({error: null});
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