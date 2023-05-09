import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app dashboard first time', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('p.t-no-automations')).toHaveText('No automations currently available...');
})
