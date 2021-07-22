import axios from 'axios'

const axiosConfig = {
	baseURL: 'https://api.github.com',
	auth: {
		username: process.env.GITHUB_ID,
		password: process.env.GITHUB_SECRET,
	},
}

function searchRepositories(searchText: string, language: string) {
	const query = language ? `${searchText}+language:${language}` : searchText

	return axios.get(
		`/search/repositories?q=${query}&sort=stars&order=desc`,
		axiosConfig
	)
}

export { searchRepositories }
