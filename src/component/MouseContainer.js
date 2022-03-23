import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)//boolean

	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}{/*when toggle button click the display will disappear but mouse event still being log */}
		</div>
	)
}
//even the component remove the listener still listening and executing
// should clear/unmount the code executed

export default MouseContainer