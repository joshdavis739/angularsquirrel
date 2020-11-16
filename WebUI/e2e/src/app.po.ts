import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  public navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  public getTitleText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  public getNavBar(): ElementFinder {
    return element(by.tagName('nav'));
  }

  public getHomeButton(): ElementFinder {
    return this.getNavBar().element(by.linkText('HOME'));
  }

  public getBlogButton(): ElementFinder {
    return this.getNavBar().element(by.linkText('BLOG'));
  }
}
