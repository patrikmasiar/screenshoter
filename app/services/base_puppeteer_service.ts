export type GeneratePdfParams = {
  url: string
}

export default abstract class BasePuppeteerService {
  abstract generatePdf(params: GeneratePdfParams): Promise<Buffer>
}
