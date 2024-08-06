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

router.get('/pdf', [PdfController, 'index'])
