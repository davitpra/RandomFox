// Forma implícito (JSX:Element)**
const MyComponent = () => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}

// Forma explícita "JSX.Element"**
const MyComponent2 = (): JSX.Element => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}

// Usando tipos de React "FunctionComponent"**
import type { FunctionComponent } from "react"
const MyComponent3: FunctionComponent = () => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}

// Usando tipos de React "FC"**
import type { FC } from "react"

const MyComponent4: FC = () => {
	return (
		<div>
			<h1>Hola!</h1>
		</div>
	)
}
