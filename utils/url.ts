export default class UrlUtils {
  /**
   * Validate if a given string is a valid URL
   * @param {string} url - The URL string to validate
   * @returns {boolean} - Returns true if the URL is valid, false otherwise
   */
  static isValidUrl(url: string) {
    try {
      new URL(url)
      return true
    } catch (_) {
      return false
    }
  }

  /**
   * Decode a URL string
   * @param {string} url - The URL string to decode
   * @returns {string} - The decoded URL string
   */
  static decodeUrl(url: string) {
    return decodeURIComponent(url)
  }
}
