import React, { useState } from "react";
import * as Chance from "chance";
import Header from "../../custom/";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { ReactComponent as Conference } from "../../../assets/svg/home.svg";
import ReactParticles from "react-particles-js";
import particlesConfig from "../../../data/particles-config.js";
const chance = new Chance();

const Home = ({ history, items }) => {
	const [roomId, setRoomId] = useState("");

	return (
		// <div style={{ marginTop: 10, marginLeft: 10 }}>
		// 	<input
		// 		type="text"
		// 		value={roomId}
		// 		onChange={(e) => setRoomId(e.target.value)}></input>
		// 	<button
		// 		type="button"
		// 		onClick={() => {
		// 			if (!roomId) {
		// 				alert("RoomId is required");
		// 				return;
		// 			}
		// 			history.push(`/room/${roomId}`);
		// 		}}>
		// 		Join Room
		// 	</button>
		// 	<button
		// 		type="button"
		// 		onClick={() => {
		// 			const id = chance.guid();
		// 			history.push(`/room/${id}`);
		// 		}}>
		// 		Create Room
		// 	</button>
		// </div>
		<div>
			<Header items={items} logo={<Logo />} navPosition="center" />
			<main className="main">
				<Particles params={particlesConfig}>
					<div className="main__content">
						<h2>Powerful Video Conferencing Application.</h2>
						<div className="btn">
							<button
								className="btn__section-create"
								onClick={() => {
									const id = chance.guid();
									history.push(`/room/${id}`);
								}}>
								Create Room
							</button>
							<button className="btn__section-join">Join Room</button>
						</div>
					</div>
				</Particles>
				<div className="main__conference-img">
					<Conference />
				</div>
			</main>
		</div>
	);
};
function Particles({ children }) {
	return (
		<div>
			<ReactParticles
				params={particlesConfig}
				style={{
					position: "absolute",
					zIndex: -1,
					left: 0,
					right: 0,
					bottom: 0,
					top: 0,
				}}
			/>
			{children}
		</div>
	);
}
export default Home;
