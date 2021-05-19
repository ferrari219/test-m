import React, { Component } from 'react';
import axios from 'axios';
class Loading extends Component {
	state = {
		isLoading: true,
	};

	getMovies = async () => {
		const data = await axios.get('https://yts-proxy.now.sh/list_movies.json');
		console.log(data);
	};
	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? <h1>isLoading</h1> : <h1>Ready</h1>}</div>;
	}
}

export default Loading;
