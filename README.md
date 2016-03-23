# nodeppt for web 
## usage

```shell
npm install
```

or (for the chinese people,living behind GFW)

```shell
npm install --registry=https://registry.npm.taobao.org
```

if has error, please add `sudo`, for it installs pm2 global

then (using node, not recommended)

```shell
npm start
```

or (using pm2, recommended)

```shell
npm run pm2
```

## default setting
- ip and port set to openshift env if exist, otherwise 127.0.0.1:8080
- ppt direction set to `ppts/`
