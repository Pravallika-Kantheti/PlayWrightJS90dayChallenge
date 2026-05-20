let username = "john_doe";
let password = "password123";

let isAccountLocked = true; // Simulating an account lock

if (username === "john_doe" && password === "password123" && !isAccountLocked) {
    console.log("Login successful! Welcome, " + username + ".");
} else if (isAccountLocked) {
    console.log("Your account is locked. Please contact support.");
} else {
    console.log("Invalid username or password. Please try again.");
}   