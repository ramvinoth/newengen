'use strict';

module.exports = {
  REQUESTS_DELAY: 0,
  IMG_STATIC: 'http://www.tamizhans.in',
  IMG_STATIC_URL: 'http://www.tamizhans.in/image.php',
  REQUESTS_DELAY_SYSTEM: 0,
  baseURL: (process.env.BASEURL || 'https://new-engen.herokuapp.com'),
  db: 'mongodb://viyabiz_vinz:viyaSmart$6@ds251618.mlab.com:51618/newengen',
  server: {
    host: process.env.SERVER ||'https://new-engen.herokuapp.com',
    port: process.env.PORT
  },
  secret: 'newengensecret',
  settings: {
  	perPage: 10,
  	email: {
  		service: 'thaco.websitewelcome.com'
  	}
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  FACEBOOK_SECRET: 'bb0908d09db0197a9988152a322e41a4',
  NEWRELIC_LICENCE_KEY: '9ce3a29fe56a6dbe4fdf7a0c2f45662604fcc477',
};
