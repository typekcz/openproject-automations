const log: {
	error?: typeof console.error,
	warn?: typeof console.warn,
	info?: typeof console.info,
	debug?: typeof console.debug
	trace?: typeof console.trace
} = {};

switch(process.env?.["LOG_LEVEL"]?.toLowerCase() ?? "info"){
	case "trace":
		log.trace = console.trace;
	case "debug":
		log.debug = console.debug;
	case "info":
		log.info = console.info;
	case "warn":
		log.warn = console.warn;
		log.error = console.error;
}

export default log;
