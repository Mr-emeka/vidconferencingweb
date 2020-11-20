import React, { useEffect, useRef, useState } from "react";

const Video = ({ peer, name }) => {
	const refVideo = useRef(null);
	const [streamObj, setStreamObj] = useState(null);

	useEffect(() => {
		if (peer) {
			peer.on("stream", (stream) => {
				console.log("stream", stream);
				setStreamObj(stream);
				console.log(stream.getVideoTracks());
				refVideo.current.srcObject = stream;
			});
		}
	}, [peer]);

	const mute = () => {
		if (streamObj !== null) {
			streamObj.getVideoTracks()[0].enabled = !streamObj.getVideoTracks()[0]
				.enabled;
			streamObj.getAudioTracks()[0].enabled = !streamObj.getAudioTracks()[0]
				.enabled;
		}
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<video autoPlay ref={refVideo} playsInline />
			<span onClick={() => mute()}>mute</span>
		</div>
	);
};

export default Video;
