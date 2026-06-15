let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })

});

apiCall.then(function (response) {
    console.log(response.status);
    console.log(response.body);
    console.log(response);
})

// .then() runs ONLY when the promise resolves successfully.