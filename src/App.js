import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
	state = {
		count: 0,
	};
	handleCounterIncrease = () => {
		this.setState((current) => ({ count: current.count + 1 }));
	};
	handleCounterDecrease = () => {
		this.setState((current) => ({ count: current.count - 1 }));
	};
	render() {
		const { count } = this.state;
		const { handleCounterIncrease, handleCounterDecrease } = this;
		return (
			<div>
				<Counter count={count} />
				<div>
					<button type="button" onClick={handleCounterIncrease}>
						+
					</button>
					<button type="button" onClick={handleCounterDecrease}>
						-
					</button>
				</div>
			</div>
		);
	}
}

export default App;
