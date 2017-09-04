
import Koa from 'koa'
import KoaBody from 'koa-body'
import serve from 'koa-static'
import { MWLogger } from './utils/logger'
import errorHandler from './utils/errorHandler'

const app = new Koa()

app.use(serve('./client'))
app.use(KoaBody())
app.use(MWLogger)
app.use(errorHandler)

app.use(ctx => {
  ctx.body = 'hello koa'
  ctx.throw('404')
})

app.listen(3000, () => {
  console.log('app started at port 3000...')
})
