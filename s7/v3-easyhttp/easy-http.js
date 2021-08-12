class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json()
    return resData
  }

  // Make a HTTP POST Request
  async post(url) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }

  // Make an HTTP PUT Request to update user information 
  async put(url) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }

  // Make an HTTP PUT Request to update user information 
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await '...resources being removed...';
    return resData
  }

}