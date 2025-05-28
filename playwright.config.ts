import { defineConfig, devices } from '@playwright/test';

/**
 * Lee las variables de entorno desde un archivo.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * Consulta https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './Test2',
  /* Ejecuta los tests en archivos en paralelo */
  fullyParallel: true,
  /* Falla la build en CI si accidentalmente dejaste un test.only en el código fuente. */
  forbidOnly: !!process.env.CI,
  /* Reintenta solo en CI */
  retries: process.env.CI ? 2 : 0,
  /* Desactiva los tests en paralelo en CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reportero a usar. Consulta https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Configuración compartida para todos los proyectos abajo. Consulta https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    /* URL base para usar en acciones como `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Recoge trazas al reintentar un test fallido. Consulta https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configura proyectos para los principales navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Prueba en vistas móviles. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Prueba en navegadores de marca. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Ejecuta tu servidor de desarrollo local antes de iniciar los tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
