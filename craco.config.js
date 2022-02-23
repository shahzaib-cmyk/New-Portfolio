const path = require("path");
module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, "src/components/"),
      'data': path.resolve(__dirname, "src/data/"),
      'assets': path.resolve(__dirname, "src/assets/"),
      'screens': path.resolve(__dirname, "src/screens/"),
      'utils': path.resolve(__dirname, "src/utils/"),
    }
  }
}