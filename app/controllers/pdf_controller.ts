import { inject } from '@adonisjs/core'
import PuppeteerService from '#services/puppeteer_service'
import { HttpContext } from '@adonisjs/core/http'
import UrlUtils from '../../utils/url.js'

@inject()
export default class PdfController {
  constructor(protected puppeteerService: PuppeteerService) {}

  async index({ response, request }: HttpContext) {
    const url = request.input('url')

    try {
      if (!url) {
        return response.status(400).send('Missing url parameter')
      }

      if (!UrlUtils.isValidUrl(url)) {
        return response.status(400).send('Invalid url parameter')
      }

      const pdf = await this.puppeteerService.generatePdf({
        url: UrlUtils.decodeUrl(url),
      })
      response.header('Content-Type', 'application/pdf')
      response.header('Content-Disposition', 'attachment; filename="generated.pdf"')

      return response.send(pdf)
    } catch (error) {}
  }
}
