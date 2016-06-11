# Nodeppt for Web 
## Usage

```shell
npm install
```

or (recommend for the chinese people,living behind GFW)

```shell
npm install --registry=https://registry.npm.taobao.org
```

If has error, please add `sudo`, for it installs pm2 global

then (using node, not recommended in production environment)

```shell
npm start
```

or (using pm2, recommended in production environment)

```shell
npm run pm2
```

## Default Setting
- ip and port set to openshift env if exist, otherwise 127.0.0.1:8080
- ppt direction set to `ppts/`
