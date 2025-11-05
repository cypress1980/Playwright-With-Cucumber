const siteList = {
    stage: 'https://staging.qa.com/',
    prod: 'https://app.qa.com/'
};

class SiteList {
    static getSiteList(siteName) {
        return siteList[siteName];
    }
}

module.exports = { SiteList };