import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        const { stream } = this.props

        if (!stream) {
            return <div>Loading...</div>
        } 

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={{ title: stream.title, description: stream.description }} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] })

export default connect(mapStateToProps, { editStream: editStream, fetchStream: fetchStream })(StreamEdit)