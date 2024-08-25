import puppeteer from 'puppeteer'
import BasePuppeteerService, {
  GenerateImageParams,
  GeneratePdfParams,
} from '#services/base_puppeteer_service'

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

  async generateImage(params: GenerateImageParams) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(params.url, {
      waitUntil: 'networkidle2',
    })

    const image = await page.screenshot({
      fullPage: true, //params.fullPage,
      type: 'png',
    })
    await browser.close()

    return image
  }
}
