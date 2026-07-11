// Example 5: Using super for Extended Behavior
class BasePage {
    verify() {
        console.log("Base: Verifying page title");
    }
}

class LoginPage extends BasePage {
    verify() {
        super.verify();  // Call parent's verify first
        console.log("Login: Verifying username field");
        console.log("Login: Verifying password field");
        console.log("Login: Verifying login button");
    }
}

class DashboardPage extends BasePage {
    verify() {
        super.verify();
        console.log("Dashboard: Verifying welcome message");
        console.log("Dashboard: Verifying navigation menu");
    }
}

class CartPage extends BasePage {
    verify() {
        super.verify();
        console.log("Cart: Verifying cart items");
        console.log("Cart: Verifying total price");
    }
}

// Polymorphic usage
let pages = [new LoginPage(), new DashboardPage(), new CartPage()];
pages.forEach(page => {
    console.log("---");
    page.verify();
});
