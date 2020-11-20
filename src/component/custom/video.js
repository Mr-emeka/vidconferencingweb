import React, { useEffect, useRef } from "react";

const Video = ({ peer, name }) => {
  const refVideo = useRef(null);
  console.log(peer)

	useEffect(() => {
		if (peer) {
			peer.on("stream", (stream) => {
				refVideo.current.srcObject = stream;
			});
		}
	}, [peer]);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<video autoPlay ref={refVideo} playsInline />
			<span>{name}</span>
		</div>
	);
};

export default Video;
