/*global hexo*/
'use strict';

// urls generator
hexo.extend.generator.register('baidu_urls_generator', require('./lib/generator'));
// urls pusher
hexo.extend.deployer.register('baidu_urls_pusher', require('./lib/pusher'));
