const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api/checkout/baskets", {
            target: "https://www.adidas.com",
            changeOrigin:true
        })
    );
}

