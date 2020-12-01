import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
	enter: 400,
	exit: 1000,
};

class App extends Component {
	state = {
		modalIsOpen: false,
		showBlock: false,
	};

	showModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	render() {
		return (
			<div className='App'>
				<h1>React Animations</h1>
				<button
					className='Button'
					onClick={() =>
						this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
					}
				>
					Toggle
				</button>
				<br />
				<Transition
					in={this.state.showBlock}
					timeout={1000}
					mountOnEnter
					unmountOnExit
					onEnter={() => console.log("on enter")}
					onEntering={() => console.log("on entering")}
					onEntered={() => console.log("on entered")}
					onExit={() => console.log("on exit")}
					onExiting={() => console.log("on exiting")}
					onExited={() => console.log("on exited")}
				>
					{(state) => (
						<div
							style={{
								backgroundColor: "red",
								width: 100,
								height: 100,
								margin: "auto",
								transition: "opacity 1s ease-out",
								opacity: state === "exiting" ? 0 : 1,
							}}
						></div>
					)}
				</Transition>
				<CSSTransition
					classNames='fade-slide'
					in={this.state.modalIsOpen}
					timeout={animationTiming}
					mountOnEnter
					unmountOnExit
				>
					<Modal show={this.state.showModal} closed={this.closeModal} />
				</CSSTransition>
				{this.state.modalIsOpen ? <Backdrop show /> : null}
				<button className='Button' onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
