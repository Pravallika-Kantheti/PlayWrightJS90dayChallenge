//status codes in API
//200 - success 
//400 - bad request
//401 - unauthorized 
//403 - forbidden
//404 - not found
//500 - internal server error
//API response
let apiResponse = {
    statusCode: 200,
    message: "Success"
};
if (apiResponse.statusCode === 200) {
    console.log("API call was successful: " + apiResponse.message);
} else if (apiResponse.statusCode === 400) {
    console.log("Bad request: " + apiResponse.message);
} else if (apiResponse.statusCode === 401) {
    console.log("Unauthorized: " + apiResponse.message);
} else if (apiResponse.statusCode === 403) {
    console.log("Forbidden: " + apiResponse.message);
} else if (apiResponse.statusCode === 404) {
    console.log("Not found: " + apiResponse.message);
} else if (apiResponse.statusCode === 500) {
    console.log("Internal server error: " + apiResponse.message);
} else {
    console.log("Unknown status code: " + apiResponse.statusCode);
}   
