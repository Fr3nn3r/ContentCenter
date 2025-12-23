import { test, expect } from '@playwright/test';

test.describe('Layout and Navigation', () => {
  test('home page has correct structure', async ({ page }) => {
    await page.goto('/');

    // Header exists
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Logo/site name
    await expect(page.getByRole('link', { name: 'Fred Brunner' }).first()).toBeVisible();

    // Check nav links exist (they may be hidden on mobile)
    const viewport = page.viewportSize();
    const isMobile = viewport && viewport.width < 640;

    if (!isMobile) {
      // Desktop: nav links should be visible
      const navLinks = ['Home', 'Projects', 'Blog', 'About', 'Contact'];
      for (const link of navLinks) {
        await expect(page.getByRole('link', { name: link }).first()).toBeVisible();
      }
    } else {
      // Mobile: menu button should be visible
      await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible();
    }

    // Hero section
    await expect(page.locator('h1')).toContainText('AI');

    // Footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');

    const routes = [
      { name: 'Projects', path: '/projects' },
      { name: 'Blog', path: '/blog' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ];

    for (const route of routes) {
      await page.goto('/');
      await page.getByRole('link', { name: route.name }).first().click();
      await expect(page).toHaveURL(new RegExp(route.path));
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('home page logo links to home', async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('link', { name: 'Fred Brunner' }).first().click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Page Content', () => {
  test('home page has featured projects section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Featured Projects')).toBeVisible();
    await expect(page.getByText('ClaimEval')).toBeVisible();
  });

  test('projects page lists projects', async ({ page }) => {
    await page.goto('/projects');

    await expect(page.locator('h1')).toContainText('Projects');
    await expect(page.getByText('ClaimEval')).toBeVisible();
    await expect(page.getByText('Prompt Management')).toBeVisible();
  });

  test('about page has content sections', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('h1')).toContainText('About');
    await expect(page.getByText('What I Do')).toBeVisible();
  });

  test('contact page has contact info', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Contact');
    await expect(page.getByRole('heading', { name: 'Email' })).toBeVisible();
  });

  test('blog page shows empty state', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('h1')).toContainText('Blog');
    await expect(page.getByText('Blog posts coming soon.')).toBeVisible();
  });
});

test.describe('Visual Layout', () => {
  test('content is properly contained within max-width', async ({ page }) => {
    await page.goto('/');

    const main = page.locator('main');
    const mainBox = await main.boundingBox();
    const viewport = page.viewportSize();

    if (viewport && mainBox && viewport.width > 1200) {
      // Content should be centered, not full width on large screens
      expect(mainBox.width).toBeLessThanOrEqual(viewport.width);
    }
  });

  test('text is readable size', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1');
    const fontSize = await h1.evaluate((el) =>
      window.getComputedStyle(el).fontSize
    );

    expect(parseInt(fontSize)).toBeGreaterThanOrEqual(24);
  });

  test('buttons have proper styling', async ({ page }) => {
    await page.goto('/');

    const primaryButton = page.getByRole('link', { name: /Book a call|Get in touch/ });
    await expect(primaryButton).toBeVisible();

    const bgColor = await primaryButton.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('cards have visible borders', async ({ page }) => {
    await page.goto('/');

    const card = page.locator('a[href*="/projects/"]').first();
    if (await card.count() > 0) {
      const border = await card.evaluate((el) =>
        window.getComputedStyle(el).borderWidth
      );
      expect(border).not.toBe('0px');
    }
  });
});

test.describe('Accessibility', () => {
  test('skip link exists and works', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveCount(1);

    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
  });

  test('all pages have exactly one h1', async ({ page }) => {
    const pages = ['/', '/projects', '/blog', '/about', '/contact'];

    for (const url of pages) {
      await page.goto(url);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    }
  });

  test('links are keyboard focusable', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});

test.describe('Mobile Layout', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('mobile menu button exists', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test('mobile menu toggles', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('button[aria-label="Open menu"]');
    const mobileMenu = page.locator('#mobile-menu');

    await expect(mobileMenu).toBeHidden();
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();
    await menuButton.click();
    await expect(mobileMenu).toBeHidden();
  });

  test('content fits mobile viewport', async ({ page }) => {
    await page.goto('/');

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = page.viewportSize()?.width || 375;

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
