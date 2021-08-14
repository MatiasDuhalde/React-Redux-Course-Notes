import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import Hls from 'hls.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    if (this.hls) {
      this.hls.destroy();
    }
  }

  buildPlayer() {
    if (this.hls || !this.props.stream) {
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls();
      const streamId = this.props.match.params.id;
      hls.loadSource(`http://localhost:8000/live/${streamId}/index.m3u8`);
      hls.attachMedia(this.videoRef.current);
    }
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
