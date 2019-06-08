import React from 'react';
import './ErrorBoundry.css';

class ErrorBoundry extends React.Component {
    constructor (props ) {
        super(props);
        this.state = {
            hasError:false
        };
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return(
                <h1 className='tc nice'>Ooooops. Something went wrong ^_^</h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry