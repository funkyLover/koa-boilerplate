
import Koa from 'koa'
import KoaBody from 'koa-body'
import serve from 'koa-static'
import { MWLogger } from './utils/logger'

const app = new Koa()

app.use(serve('./client'))
app.use(KoaBody())
app.use(MWLogger)

app.use(ctx => {
  ctx.body = 'hello koa'
})

app.listen(3000, () => {
  console.log('app started at port 3000...')
})
