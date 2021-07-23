import { IUser } from '@src/types'
import axios from 'axios'

interface IAuth {
	username: string
	password: string
}
interface IAxiosConfig {
	baseURL: string
	auth: IAuth
}

const axiosConfig: IAxiosConfig = {
	baseURL: 'https://api.github.com',
	auth: {
		username: process.env.GITHUB_ID || '',
		password: process.env.GITHUB_SECRET || '',
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
		data.items.map(async (item: IUser) => {
			const { data } = await fetchSpecificUser(item.login)

			return data
		})
	)
	return { data: { items: result, total_count: data.total_count } }
}

function fetchUserRepos(userName: string, typeRepo: string, page: number) {
	return axios.get(
		`/users/${userName}/${typeRepo}?per_page=10&page=${page}`,
		axiosConfig
	)
}

function fetchSpecificUser(login: string) {
	return axios.get(`/users/${login}`, axiosConfig)
}

export { searchRepositories, searchUser, fetchUserRepos }
