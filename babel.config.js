module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      //// NEW PLUGIN

      ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "utils": "./src/utils",
        "screens": "./src/screens",
        //"store": "./src/store",
        //"assets": "./src/assets",
       // "entities": "./src/entities",
       // "server": "./src/server",
       // "actions": "./src/store/actions",
        "components": "./src/components",
      }
    }]],
    
    
  };
};


                                                                                    