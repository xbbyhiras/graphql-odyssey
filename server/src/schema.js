import { gql } from 'apollo-server'

export const typeDefs = gql`
	"""
	An author creates or module or a complete track.
	"""
	type Author {
		id: ID!
		name: String!
		photo: String
	}

	"""
	A track is a group of modules that teaches about a specific topics.
	"""
	type Track {
		id: ID!
		title: String!
		"The track main author."
		author: Author!
		"URL of the main illustration to display in the track card or the track page."
		thumbnail: String
		"The track's approximate length to complete, in minutes."
		timeToComplete: Int
		"The number of modules this track contains."
		modulesCount: Int 
	}

	type Query {
		"	Get Tracks array for the homepage grid."
		getHomepageTracks: [Track!]!
	}
`