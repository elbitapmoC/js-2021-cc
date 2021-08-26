class Weather {
  constructor(zipCode) {
    this.apiKey = 'faf896fcaa04cdd9c30266f8935f6d13'
    this.zipCode = zipCode;
  }
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode},us&appid=${this.apiKey}`)
    console.log(response);
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(zipCode) {
    this.zipCode = zipCode;
  }
}