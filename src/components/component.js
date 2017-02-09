const { assign } = Object

export default class Component {
	setState(state) {
		// assign(this, {
		// 	state,
		// 	prevState: { ...this.state },
		//  })

		console.log(`settinf`, state)
		// this.onStateUpdate()
	}

	onStateUpdate() {}
}
