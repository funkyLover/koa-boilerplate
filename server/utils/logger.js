
import winston from 'winston'
// import DailyRotateFile from 'winston-daily-rotate-file'

// @TODO: log file;
// const transport = new DailyRotateFile({
//   filename: './log',
//   datePattern: 'yyyy-MM-dd.',
//   prepend: true,
//   level: process.env.ENV === 'development' ? 'debug' : 'info'
// })

// const winstonLogger = new winston.Logger({
//   transports: [
//     transport
//   ]
// })

const logger = {
  debug: createLogger('debug'),
  info: createLogger('info'),
  warn: createLogger('warn'),
  error: createLogger('error')
}

function createLogger (level) {
  return function (message, where, event) {
    if (typeof message === 'object') {
      message = JSON.stringify(message)
    }
    winston[level](`(M)${message}, (W)${where}, (E)${event}`)
  }
}

export const MWLogger = async (ctx, next) => {
  const body = ctx.method.toLowerCase() === 'get' ? ctx.request.query : ctx.request.body
  const bodyString = JSON.stringify(body)
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  // common log for every request
  winston.info(`${ctx.method} ${ctx.url} - #${bodyString}# - ${ms}ms`)
}

export default logger
