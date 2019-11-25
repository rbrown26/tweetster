export const tweetService = {
    addTweet
};

  function addTweet(createdBy, message) {
    console.log('in addTweet');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ createdBy, message })
    };
    console.log('built my request options');

    //return fetch(`https://polar-everglades-29406.herokuapp.com/tweet/add`, requestOptions)
    return fetch(`http://localhost:8080/tweet/add`, requestOptions)
        .then(handleResponse)
        .then(tweet => {
            if (tweet) {
                localStorage.setItem('tweet', JSON.stringify(tweet));
            }

            return tweet;
        });
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
