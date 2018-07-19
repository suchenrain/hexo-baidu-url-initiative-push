# hexo-baidu-url-initiative-push

![npm version](https://img.shields.io/badge/npm-1.0.0-brightgreen.svg)

Hexo 插件，用于主动推送站点链接到百度搜索引擎，SEO 优化。

## 安装

```
npm install --save hexo-baidu-url-initiative-push
```

## 使用

安装完成后，在 hexo 的配置文件`_config.yml`里添加：

```
# Baidu url pusher
baidu_url_pusher:
  count: 50  # 推送的链接数
  path: baidu_urls.txt  # 将要推送的链接的保存路径,默认为 baidu_urls.txt
  host: https://suchenrain.github.io  # 在百度搜索资源平台验证的站点，比如www.example.com
  token: __Baidu_Push_Token__  # 在搜索资源平台申请的推送用的准入密钥（不要保存在开放的源码中！可以配置在Travis CI中比如）
```

加入新的 deployer:

```
deploy:
- type: git
  repo: https://__GH_Token__@github.com/suchenrain/suchenrain.github.io.git
  branch: master
  message: "Site updated at: {{ now('YYYY-MM-DD HH:mm:ss [UTC+8]') }}"
- type: baidu_urls_pusher ## 看这行！！！
```

下一次执行`hexo deploy`的时候就会触发我们新添加的 deployer 将链接主动推送到 baidu。类似输出：

```
> hexo clean && hexo generate && hexo deploy
INFO  Start processing
INFO  Generating Baidu urls for last 50 posts
INFO  Posts urls generated in baidu_urls.txt
https://suchenrain.github.io/posts/44663/
https://suchenrain.github.io/posts/65521/
https://suchenrain.github.io/posts/7035/
https://suchenrain.github.io/posts/33559/
https://suchenrain.github.io/posts/27698/
https://suchenrain.github.io/posts/55816/
https://suchenrain.github.io/posts/32469/
https://suchenrain.github.io/posts/30460/
https://suchenrain.github.io/posts/38902/
https://suchenrain.github.io/posts/6331/
https://suchenrain.github.io/posts/12438/
https://suchenrain.github.io/posts/20456/
https://suchenrain.github.io/posts/55466/
https://suchenrain.github.io/posts/7310/
https://suchenrain.github.io/posts/46722/
https://suchenrain.github.io/posts/40446/
https://suchenrain.github.io/posts/64464/
https://suchenrain.github.io/posts/15918/
https://suchenrain.github.io/posts/27331/
https://suchenrain.github.io/posts/53323/
https://suchenrain.github.io/posts/28203/
INFO  Files loaded in 2.24 s

...

INFO  Generated: baidu_urls.txt
INFO  Deploying: baidu_urls_pusher
INFO  Pushing urls
https://suchenrain.github.io/posts/44663/
https://suchenrain.github.io/posts/65521/
https://suchenrain.github.io/posts/7035/
https://suchenrain.github.io/posts/33559/
https://suchenrain.github.io/posts/27698/
https://suchenrain.github.io/posts/55816/
https://suchenrain.github.io/posts/32469/
https://suchenrain.github.io/posts/30460/
https://suchenrain.github.io/posts/38902/
https://suchenrain.github.io/posts/6331/
https://suchenrain.github.io/posts/12438/
https://suchenrain.github.io/posts/20456/
https://suchenrain.github.io/posts/55466/
https://suchenrain.github.io/posts/7310/
https://suchenrain.github.io/posts/46722/
https://suchenrain.github.io/posts/40446/
https://suchenrain.github.io/posts/64464/
https://suchenrain.github.io/posts/15918/
https://suchenrain.github.io/posts/27331/
https://suchenrain.github.io/posts/53323/
https://suchenrain.github.io/posts/28203/
{"remain":4999978,"success":21}
INFO  Deploy done: baidu_urls_pusher
```
