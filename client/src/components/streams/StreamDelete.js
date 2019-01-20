import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => (
        <React.Fragment>
            <button onClick={this.onDelete} className="ui button negative">Delete</button>
            <Link to={'/'} className="ui button">Cancel</Link>
        </React.Fragment>
    )

    onDismiss = () => history.push('/')

    onDelete = () => { this.props.deleteStream(this.props.match.params.id) }
    

    renderContent = () => {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
    }

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={this.onDismiss}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream: fetchStream, deleteStream: deleteStream })(StreamDelete)