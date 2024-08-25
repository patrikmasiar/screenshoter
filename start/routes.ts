/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PdfController = () => import('#controllers/pdf_controller')
const ImageController = () => import('#controllers/image_controller')

import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})
router.get('/pdf', [PdfController, 'index'])
router.get('/image', [ImageController, 'index'])
