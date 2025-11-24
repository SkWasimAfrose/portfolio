const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {
      overrideBrowserslist: [
        "last 2 versions",
        "Chrome >= 111",
        "Safari >= 16.4",
        "Firefox >= 128",
        "Edge >= 111",
        "iOS >= 16.4",
        "not dead"
      ]
    }
  },
};

export default config;
