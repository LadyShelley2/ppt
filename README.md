# node ppt for openshift web 
## usage

```shell
npm install
# install pm2 global
npm install -g pm2
```

or (for the chinese people,living behind GFW)

```shell
npm install --registry=https://registry.npm.taobao.org
npm install -g pm2 --registry=https://registry.npm.taobao.org
```

then

```shell
npm start
```

## default setting
- ip and port set to openshift env if exist, otherwise 127.0.0.1:8080
- ppt direction set to `ppts/`
