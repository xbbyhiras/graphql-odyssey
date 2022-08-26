import { ApolloServer } from "apollo-server";
import { schema } from '@nx-odyssey/schema'

const mocks = {
	Query: () => ({
		getHomepageTracks: () => [...new Array(6)]
	}),
	Track: () => ({
		id: () => 'Track_01',
		title: () => 'Astro Kitty, Space Explorer',
		author: () => {
			return {
				id: 1,
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
		},
		thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
		timeToComplete: () => 1210,
		modulesCount: () => 6
	})
}

const server = new ApolloServer({
	typeDefs: schema(),
	mocks
})

server
	.listen()
	.then(() => {
		console.log(`
		🚀 Server is running !
		🎧 Listening on port 4000
		🔍 Query at http://localhost:4000
		`)
	})