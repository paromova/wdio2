// https://stage.pasv.us/user/register

    const assert = require('assert');
const {expect} =
describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })
    it('should have a correct title', () => {
       const actualH1Text = $('h1').getText();
       const expectedH1Text = 'User Register';
       assert(actualH1Text, expectedH1Text);
    });
})