export interface IUser {
	login: string
	id: number
	nodeId: string
	avatarUrl: string
	gravatarId: string
	url: string
	htmlUrl: string
	followersUrl: string
	followingUrl: string
	gistsUrl: string
	starredUrl: string
	subscriptionsUrl: string
	organizationsUrl: string
	reposUrl: string
	eventsUrl: string
	receivedEventsUrl: string
	type: string
	siteAdmin: boolean
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: string
	bio: string
	twitterUsername: string
	publicRepos: number
	publicGists: number
	followers: number
	following: number
	createdAt: string
	updatedAt: string
}

export interface IRepository {
	id: number
	name: string
	owner: IUser
	stargazersCount: number
	watchers: number
	forks: number
	openIssues: number
	description: string
	fullName: string
}

export interface ISearchState {
	data: [IUser | IRepository]
	typeSearch: string
	loading: boolean
	totalCount: number
	query: string
	selectedItem: IUser
	tabArea: string
	repos: [IRepository]
}

export interface IUserState {
	loading: boolean
	totalCount: number
	selectedItem: IUser
	tabArea: string
	repos: [IRepository]
}

export interface IRootState {
	search: ISearchState
	user: IUserState
}
