import { test, expect } from '@playwright/test';

test('buscar películas de comedia usando el selector de géneros', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Seleccionar el género "Comedia"
  const genreSelect = page.locator('select');
  await genreSelect.selectOption('Comedia');

  // Esperar a que aparezcan encabezados <h3> (películas renderizadas)
  const movieTitles = page.locator('h3');

  // Esperamos al menos 1 resultado (>= 1)
  await expect(movieTitles).toHaveCountGreaterThanZero();
});

// Utilidad que puedes copiar a un archivo común o al mismo test:
expect.extend({
  async toHaveCountGreaterThanZero(locator) {
    const count = await locator.count();
    if (count > 0) {
      return { pass: true, message: () => `Esperado más de 0 elementos y se encontró ${count}` };
    } else {
      return { pass: false, message: () => 'Esperado al menos un elemento, pero no se encontró ninguno' };
    }
  }
});
