import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { featchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.featchStreams()
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
                </div>
            )
        }
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => (
            <div key={stream.id} className="item">
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        ))
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, { featchStreams: featchStreams })(StreamList)