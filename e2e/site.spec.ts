import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { earlierProjects, projects } from '../src/data/projects';

const pages = [
  '/',
  ...projects.map((p) => `/work/${p.slug}/`),
  ...earlierProjects.filter((e) => e.status === 'page').map((e) => `/work/${e.slug}/`),
];

test('home lists every project with separate demo and source links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  for (const p of projects) {
    const plate = page.locator(`article#${p.slug}`);
    await expect(plate.getByRole('heading', { name: new RegExp(p.title) })).toBeVisible();
    await expect(
      plate.locator(`a[href="https://mustafaobaidd1.github.io/${p.slug}/"]`).first(),
    ).toBeAttached();
    await expect(
      plate.locator(`a[href="https://github.com/mustafaobaidd1/${p.slug}"]`),
    ).toBeAttached();
  }
});

test('earlier projects say honestly whether they run', async ({ page }) => {
  await page.goto('/#earlier');
  for (const e of earlierProjects) {
    const card = page.locator('#earlier li.card', { hasText: e.title });
    await expect(card).toContainText(
      e.badge ?? (e.status === 'live' ? 'Live site' : 'needs a server'),
    );
  }
});

test('subject filters hide and show projects', async ({ page }) => {
  await page.goto('/');
  const filters = page.getByRole('group', { name: /filter projects/i });
  await expect(filters).toBeVisible();
  await filters.getByRole('button', { name: 'Audio' }).click();
  const visible = page.locator('article.plate:visible');
  const expected = projects.filter((p) => p.categories.includes('Audio')).length;
  await expect(visible).toHaveCount(expected);
  await expect(page.locator('[data-count]')).toContainText(`${expected}`);
  await filters.getByRole('button', { name: 'All' }).click();
  await expect(page.locator('article.plate:visible')).toHaveCount(projects.length);
});

for (const path of pages) {
  test(`no overflow, no console errors, no serious axe issues: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });
    await page.goto(path);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const blocking = axe.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical',
    );
    expect(blocking.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('case-study pages link back and forward', async ({ page }) => {
  const first = projects[0]!;
  await page.goto(`/work/${first.slug}/`);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(first.title);
  await expect(
    page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Work' }),
  ).toHaveAttribute('href', '/#work');
  await page
    .getByRole('navigation', { name: 'More projects' })
    .getByRole('link', { name: /Next/ })
    .click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(projects[1]!.title);
});
