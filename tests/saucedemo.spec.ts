import { test, expect } from "@playwright/test";

test.describe("HP_01 — Login and add item to cart successfully", () => {
  test("Login, add to cart, open cart, verify item", async ({ page }) => {
    await page.goto("/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByTestId("login-button").click();

    await expect(page).toHaveURL(/inventory\.html/);

    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

    await page.locator(".shopping_cart_link").click();
    await expect(page).toHaveURL(/cart\.html/);

    await expect(page.locator(".cart_item")).toHaveCount(1);
    await expect(
      page.getByRole("link", { name: "Sauce Labs Backpack" })
    ).toBeVisible();
  });
});

test.describe("NEG_Login_01 — Login with incorrect password", () => {
  test("Login fails and error message is displayed", async ({ page }) => {
    await page.goto("/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("wrong_password");
    await page.getByTestId("login-button").click();

    await expect(page).not.toHaveURL(/inventory\.html/);
    const errorBox = page.getByTestId("error");
    await expect(errorBox).toBeVisible();
    await expect(errorBox).toContainText(
      "Username and password do not match any user in this service"
    );
  });
});
