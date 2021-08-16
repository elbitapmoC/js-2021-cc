class Github {
  constructor() {
    this.client_id = '9a15d27a6400e053989b';
    this.client_secret = 'c6d3fff1e998903f6e7b095d023cc6fb280b4736';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}