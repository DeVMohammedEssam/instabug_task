module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/global/_variables.scss";
            @import "@/scss/global/_mixins.scss";
            
          `
      }
    }
  }
};
