import { test, expect } from '@playwright/test';

//page- inbuilt fixture given to you, 
//which is a function you can directly use in playwright

test('Verify the title is TTA CART', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TTACart - Login/);
});

