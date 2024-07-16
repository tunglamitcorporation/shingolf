const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream, createWriteStream } = require('fs');
const { resolve } = require('path');

const baseUrl = 'https://shingolf.vn'; // Replace with your website's base URL
const urls = [
    { url: '/', changefreq: 'weekly', priority: 0.8 },
    { url: '/product-list/', changefreq: 'monthly', priority: 0.7 },
    { url: '/cart/', changefreq: 'weekly', priority: 0.7 },
    { url: '/search/', changefreq: 'weekly', priority: 0.7 },
    { url: '/check-order/', changefreq: 'weekly', priority: 0.7 },
    { url: '/rate/', changefreq: 'weekly', priority: 0.7 },
    { url: '/thank-you/', changefreq: 'weekly', priority: 0.7 },
    { url: '/product/:productName', changefreq: 'weekly', priority: 0.7 },
    { url: '/product-list/newgolfclub', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/oldgolfclub', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/golfset', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/accessories', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/mengolfclothes', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/womengolfclothes', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/golfbag', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/golfshoes', changefreq: 'monthly', priority: 0.7 },
    { url: '/product-list/golftraining', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: baseUrl });

urls.forEach(url => {
    sitemap.write(url);
  });
  
  sitemap.end();
  
  streamToPromise(sitemap).then((buffer) => {
    const writeStream = createWriteStream(resolve(__dirname, 'sitemap.xml'));
    writeStream.write(buffer.toString());
    writeStream.end();
  }).catch((error) => {
    console.error('Error generating sitemap:', error);
  });