import { Request, Response, Router } from 'express'

const router = Router()

router.get('', (_, res: Response) => res.send('Hello world'))

export default router
