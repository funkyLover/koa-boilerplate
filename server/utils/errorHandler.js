
import pick from 'lodash/pick'
import logger from './logger'

const errorHandler = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    var errObj = pick(err, ['code', 'status', 'message', 'stack'])
    logger.error(errObj)
  }
}

export default errorHandler
