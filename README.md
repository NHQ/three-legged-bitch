**Three Legged Bitch**

This here is a tiny, super simple https proxy, made with [Request](https://github.com/mikeal/request). You will need [node.js](http://nodejs.org) installed, and your own server.

You have to change the proxy settings on your computer, and maybe in your browser as well. Proxy HTTP request to localhost:8000

Start localhost.js on your machine.

Start remoteHost.js on your server.

**whats it for?**

I built it to bypass tethering restrictions newly imposed by my wireless carrier. They started blocking all insecure traffic. This proxy's my HTTP thru an HTTPS tunnel.

**limitations**

Gzipped data gets downloaded like a file (using Chrome).Probably there are other things.
