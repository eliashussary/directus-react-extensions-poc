
import { withDirectusReact } from "./withDirectusReact.js"
import { DebuggerInput } from "./DubggerInput.jsx"

const interfaceConfig = {
	id: 'custom',
	name: 'Custom',
	description: 'This is my custom interface!',
	icon: 'box',
	types: ['string']
}

export default withDirectusReact(interfaceConfig)(DebuggerInput)