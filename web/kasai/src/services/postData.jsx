export function PostData(type, userData) {
    let BaseURL = 'http://localhost:7000/v1/auth/'

    return new Promise((resolve, reject ) => {
        return fetch(BaseURL + type, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
          })
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson)
        })
        .catch((error) => {
          reject(error)
        });
    });
}