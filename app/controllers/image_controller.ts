import { inject } from '@adonisjs/core'
import PuppeteerService from '#services/puppeteer_service'
import { HttpContext } from '@adonisjs/core/http'
import UrlUtils from '../../utils/url.js'

@inject()
export default class ImageController {
  constructor(protected puppeteerService: PuppeteerService) {}

  /**
   * @index
   * @paramQuery url - URL - @type(string) @required
   */
  async index({ response, request }: HttpContext) {
    const url = request.input('url')

    try {
      if (!url) {
        return response.status(400).send('Missing url parameter')
      }

      if (!UrlUtils.isValidUrl(url)) {
        return response.status(400).send('Invalid url parameter')
      }

      const image = await this.puppeteerService.generateImage({
        url: UrlUtils.decodeUrl(url),
      })
      response.header('Content-Type', 'image/png')
      response.header('Content-Disposition', 'attachment; filename="generated.png"')

      return response.send(image)
    } catch (error) {}
  }
}
