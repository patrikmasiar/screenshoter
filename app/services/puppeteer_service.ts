import puppeteer from 'puppeteer'
import BasePuppeteerService, { GeneratePdfParams } from '#services/base_puppeteer_service'

export default class PuppeteerService extends BasePuppeteerService {
  constructor() {
    super()
  }

  async generatePdf(params: GeneratePdfParams) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(params.url, {
      waitUntil: 'networkidle2',
    })
    const pdf = await page.pdf({ format: 'A4' })
    await browser.close()

    return pdf
  }
}
