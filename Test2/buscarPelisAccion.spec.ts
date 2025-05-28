import { test, expect } from '@playwright/test';

// Test para buscar películas de comedia usando el selector de géneros

test('buscar películas de comedia usando el selector de géneros', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('select').selectOption('Comedia');
  const count = await page.locator('h3').count();
  expect(count).toBeGreaterThan(0);
});
