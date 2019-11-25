export const connectionService = {
    addContact
};

  function addContact(followed, follower) {
    console.log('in addContact');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ followed, follower })
    };
    console.log('built my request options');

    return fetch(`https://polar-everglades-29406.herokuapp.com/connection/add`, requestOptions)
    //return fetch(`http://localhost:8080/connection/add`, requestOptions)
        .then(handleResponse);
  }

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;

            return Promise.reject(error);
        }

        console.log('data: ' + data);
        return data;
    });
}
