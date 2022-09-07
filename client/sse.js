import EventSource from 'eventsource'

export function subscribeAndLogResultsEvery5s(baseUrl, concurrentConnections) {
	var arr = new Array(concurrentConnections).fill(0)

	for (let index = 0; index < concurrentConnections; index++) {
		var source = new EventSource(baseUrl + '/sse?key=' + index)
		//count messages per key/connection
		source.onmessage = event => arr[index]++
		source.onerror = e => console.log('error: ' + e.message)
	}

	//Every 5s print number of connections that received at least one message and also distinct values from array
	setInterval(
		() =>
			console.log(
				'Count of items > 0: ' + arr.filter(i => i > 0).length,
				'Distinct values: ' + [...new Set(arr)]
			),
		5000
	)
}
