import { inject } from '@adonisjs/core'
import PuppeteerService from '#services/puppeteer_service'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PdfController {
  constructor(protected puppeteerService: PuppeteerService) {}

  async index({ response }: HttpContext) {
    try {
      const pdf = await this.puppeteerService.generatePdf({
        url: 'https://patrikmasiar.com',
      })
      response.header('Content-Type', 'application/pdf')
      response.header('Content-Disposition', 'attachment; filename="generated.pdf"')

      return response.send(pdf)
    } catch (error) {}
  }
}
