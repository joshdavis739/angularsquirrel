import { AppPage } from './app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Angular Squirrel');
  });

  it('should have a navbar', () => {
    // Arrange
    page.navigateTo();
    // Act
    var navbar = page.getNavBar();
    browser.wait(protractor.ExpectedConditions.visibilityOf(navbar), 1000);
    // Assert
    expect(navbar).toBeDefined();
  });

  it('should have a home button on the navbar', () => {
    page.navigateTo();
    var homeButton = page.getHomeButton();
    browser.wait(protractor.ExpectedConditions.visibilityOf(homeButton), 1000);
    expect(homeButton.getText()).toBeDefined();
  });

  it('should have a blog button on the navbar', () => {
    page.navigateTo();
    var blogButton = page.getBlogButton();
    browser.wait(protractor.ExpectedConditions.visibilityOf(blogButton), 1000);
    expect(blogButton.getText()).toBe('BLOG');
  });

  it('should navigate to /blog on clicking the blog button', () => {
    page.navigateTo();
    var blogButton = page.getBlogButton();
    browser.wait(protractor.ExpectedConditions.visibilityOf(blogButton), 1000);
    blogButton.click()
    expect(browser.driver.getCurrentUrl()).toContain('/blog');
  });
});
