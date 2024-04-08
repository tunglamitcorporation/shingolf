const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream, createWriteStream } = require('fs');
const { resolve } = require('path');

const baseUrl = 'https://azumayavietnam.com'; // Replace with your website's base URL
const urls = [
    { url: '/', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/hotel-hn', changefreq: 'weekly', priority: 0.7 },
    { url: '/hotel-hcm', changefreq: 'weekly', priority: 0.7 },
    { url: '/hotel-dn', changefreq: 'weekly', priority: 0.7 },
    { url: '/hotel-hp', changefreq: 'weekly', priority: 0.7 },
    { url: '/service', changefreq: 'weekly', priority: 0.7 },
    { url: '/q&a', changefreq: 'weekly', priority: 0.7 },
    { url: '/feature', changefreq: 'weekly', priority: 0.7 },
    { url: '/breakfast', changefreq: 'weekly', priority: 0.7 },
    { url: '/massage', changefreq: 'weekly', priority: 0.7 },
    { url: '/rotenburo', changefreq: 'weekly', priority: 0.7 },
    { url: '/contract', changefreq: 'weekly', priority: 0.7 },
    { url: '/thankyou/:selectedCity', changefreq: 'weekly', priority: 0.7 },
    { url: '/news', changefreq: 'weekly', priority: 0.7 },
    { url: '/news/:title', changefreq: 'weekly', priority: 0.7 },
    { url: '/hai-ba-trung-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/kim-ma-2-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/kim-ma-3-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/linh-lang-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/thai-van-lung-1-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/thai-van-lung-2-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/le-thanh-ton-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/annex-detail/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/da-nang/room', changefreq: 'weekly', priority: 0.7 },
    { url: '/hai-phong/room', changefreq: 'weekly', priority: 0.7 },
    { url: '*', changefreq: 'weekly', priority: 0.7 },
    { url: '/feedback', changefreq: 'weekly', priority: 0.7 }
    // Add more URLs as needed
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