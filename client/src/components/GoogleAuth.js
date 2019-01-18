import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isSignedIn: null
    //     }
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '860934456251-qsiulpoftmfg716cb50kk793e52b0v60.apps.googleusercontent.com',
                scope: 'email'
            })
            
            this.auth = window.gapi.auth2.getAuthInstance()
            // this.setState({
            //     isSignedIn: this.auth.isSignedIn.get()
            // })
            this.onAuthChange()
            this.auth.isSignedIn.listen(this.onAuthChange)
        });
    }

    onAuthChange = isSignedIn => {
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        const { isSignedIn } = this.props

        if (isSignedIn === null) {
            return null
        } else if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui green google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(GoogleAuth)