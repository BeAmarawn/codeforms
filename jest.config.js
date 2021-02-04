module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  globals: {
    __DEV__: true,
  },
};
