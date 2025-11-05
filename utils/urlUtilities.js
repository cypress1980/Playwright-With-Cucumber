const { SiteList } = require('../.github/workflows/data/siteList');

class UrlUtility {
    static urlBuilder(site) {
        let finalUrl = '';
        const env = process.env.PLAYWRIGHT_ENV || process.env.ENVIRONMENT || process.env.NODE_ENV || 'dev';

        const siteUrl = SiteList.getSiteList(site);
        if (!siteUrl) {
            throw new Error(`Site URL not found for site: ${site}`);
        }

        switch (env) {
            case 'dev':
                finalUrl = siteUrl.startsWith('http') ? siteUrl : `https://dev-${siteUrl}.com/`;
                break;
            case 'stage':
                finalUrl = siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}app.whoai.com/`;
                break;
            case 'prod':
                finalUrl = siteUrl;
                break;
            case 'local':
                finalUrl = 'https://www.saucedemo.com/v1/index.html';
                break;
            default:
                throw new Error(`Invalid environment: ${env}`);
        }

        return finalUrl;
    }
}

module.exports = { UrlUtility };