import { subscribeAndLogResultsEvery5s } from './sse.js'

//Run either direct or proxy function
//direct(1000)
proxy(3000)

function direct(concurrentConnections) {
	subscribeAndLogResultsEvery5s('http://localhost:9999', concurrentConnections)
}

function proxy(concurrentConnections) {
	subscribeAndLogResultsEvery5s('http://localhost:9998', concurrentConnections)
}
