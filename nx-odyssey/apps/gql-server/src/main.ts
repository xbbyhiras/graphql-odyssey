import { ApolloServer } from "apollo-server";
import { schema } from '@nx-odyssey/schema'

const server = new ApolloServer({
	typeDefs: schema()
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