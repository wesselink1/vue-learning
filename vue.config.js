module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss/helpers/_config.scss";
                    @import "@/scss/helpers/_flexbox.scss";
                    @import "@/scss/helpers/_grid.scss";
                    @import "@/scss/helpers/_respond-to.scss";
                `
            }
        }
    }
}