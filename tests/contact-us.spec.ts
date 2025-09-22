import { expect, test } from '@playwright/test';


test('should be able to submit a contact form', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('Email').fill('email@example.com');
	await page.getByText('Write your message here').fill('Hello, World!');
	await page.getByRole('button', { name: 'Send' }).click();
	await expect(page.getByText('Thank you! :)')).toBeVisible();
});
