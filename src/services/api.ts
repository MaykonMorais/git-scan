import axios from 'axios'

const axiosConfig = {
	baseURL: 'https://api.github.com',
	auth: {
		username: process.env.GITHUB_ID,
		password: process.env.GITHUB_SECRET,
	},
}

function searchRepositories(searchText: string, page: number) {
	return axios.get(
		`/search/repositories?q=${searchText}&sort=stars&order=desc&per_page=5&page=${page}`,
		axiosConfig
	)
}

async function searchUser(searchText: string, page: number) {
	const { data } = await axios.get(
		`/search/users?q=${searchText}&sort=stars&order=desc&per_page=6&page=${page}`,
		axiosConfig
	)

	const result = await Promise.all(
		data.items.map(async item => {
			const { data } = await fetchSpecificUser(item.login)

			return data
		})
	)
	return { data: { items: result, total_count: data.total_count } }
}

function fetchSpecificUser(login: string) {
	return axios.get(`/users/${login}`, axiosConfig)
}

export { searchRepositories, searchUser }
