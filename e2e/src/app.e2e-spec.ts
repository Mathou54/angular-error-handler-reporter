import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display the title', () => {
		page.navigateTo();
		expect(page.getTitleText()).toEqual('Angular error handler reporter');
	});

	it('should have the list of errors as default page', () => {
		page.navigateTo();
		expect(page.getCardTitleText()).toEqual('All errors');
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});