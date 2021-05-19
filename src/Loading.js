import React, { Component } from 'react';

class Loading extends Component {
	state = {
		isLoading: true,
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 3000); //3초 뒤 Ready로 전환
	}

	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? <h1>isLoading</h1> : <h1>Ready</h1>}</div>;
	}
}

export default Loading;
