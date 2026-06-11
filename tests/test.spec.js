import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js'
import { DashboardPage } from '../page/dashboardPage.js'

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test.describe('Cenários de Login', () => {
  test('Login com sucesso', async ({ page }) => {
    
    await page.getByRole('textbox', { name: 'username' }).fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator('.oxd-topbar-header-breadcrumb').waitFor()
  })

  test('Login com sucesso PO', async ({ page }) => {
    const login = new LoginPage(page)
    const dashboard = new DashboardPage(page)

    await login.loginWithUser()
    await dashboard.checkDashboardPage()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })

})
