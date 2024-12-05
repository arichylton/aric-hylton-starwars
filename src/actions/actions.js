export const getStars = () => async (dispatch) => {
	dispatch({ type: "GET_DATA_PENDING" })

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/",
		)
		const data = await response.json()

		dispatch({ type: "GET_DATA", payload: data.results })
	} catch (err) {
		dispatch({ type: "GET_DATA_FAILURE", payload: err })
	}
}

export const getFilms = () => async (dispatch) => {
	dispatch({ type: "GET_FILMS_PENDING" })

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://swapi.dev/api/films/",
		)
		const data = await response.json()

		dispatch({ type: "GET_FILMS", payload: data.results })
	} catch (err) {
		dispatch({ type: "GET_FILMS_FAILURE", payload: err })
	}
}

export const getStarShips = () => async (dispatch) => {
	dispatch({ type: "GET_STARSHIPS_PENDING" })

	try {
		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/",
		)
		const data = await response.json()

		console.log(data.results)

		dispatch({ type: "GET_STARSHIPS", payload: data.results })
	} catch (err) {
		dispatch({ type: "GET_STARSHIPS_FAILURE", payload: err })
	}
}

export const searchItem = (text) => {
	return {
		type: "SEARCH_FIELD",
		payload: text,
	}
}
