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
  count: 10  # 推送的链接数
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

执行`hexo deploy`的时候就会触发我们新添加的 deployer 将链接主动推送到 baidu。
