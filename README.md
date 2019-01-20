# Overview

Playground for react, redux, api.

## Installation

First, clone this repo and change to the directory:
```bash
git clone git@github.com:pmtargosz/<project>.git
cd <project>
```

### Install

API install
```bash
cd api
npm install
```

RTMP Server install
```bash
cd rtmpserver
npm install
```

Client React-Redux App install
```bash
cd client
npm install
```

### Run JSON Server

```bash
cd api
npm run start
# Resources
# http://localhost:3001/streams
# Home
# http://localhost:3001
```

### Run RTMP Server

```bash
cd rtmpserver
npm run start
# [INFO] Node Media Server v1.4.9
# [INFO] Node Media Rtmp Server started on port: 1935
# [INFO] Node Media Http Server started on port: 8000
# [INFO] Node Media WebSocket Server started on port: 8000
```

### Run Client

```bash
cd client
npm run start
# http://localhost:3000/
```

## Resources
* [react](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [rtmp](https://github.com/illuspas/Node-Media-Server) - RTMP Server.
* [server](https://github.com/typicode/json-server) - JSON server.

## License
[MIT](https://opensource.org/licenses/MIT)
