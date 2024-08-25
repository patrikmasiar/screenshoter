export type GeneratePdfParams = {
  url: string
}

export type GenerateImageParams = {
  url: string
  fullPage?: boolean
  width?: number
  height?: number
}

export default abstract class BasePuppeteerService {
  abstract generatePdf(params: GeneratePdfParams): Promise<Buffer>
  abstract generateImage(params: GenerateImageParams): Promise<Buffer>
}
