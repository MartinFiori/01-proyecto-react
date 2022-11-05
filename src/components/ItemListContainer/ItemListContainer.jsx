import React from "react";
import axios from "axios";
const useState = React.useState;
const useEffect = React.useEffect;

const LoginForm = () => {
	const [invalidForm, setInvalidForm] = React.useState(true);
	const [data, setData] = React.useState({
		email: "",
		password: "",
	});

	const handleSetData = e => {
		setData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		if (data.email && data.password) setInvalidForm(false);
	};

	const sendRequest = async () => {
		/* REALIZAR PETICION UTILIZANDO AXIOS */
		if (isValidEmail(data.email) && isValidPassword(data.password)) {
			try {
				await axios.post("http://challenge-react.alkemy.org/", data);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				type="email"
				name="email"
				value={data.email}
				onChange={e => handleSetData(e)}
			/>
			<input
				type="password"
				name="password"
				value={data.password}
				onChange={e => handleSetData(e)}
			/>
			<button disabled={invalidForm} onClick={sendRequest}>
				Enviar
			</button>
		</form>
	);
};
export { LoginForm, isValidEmail, isValidPassword };
