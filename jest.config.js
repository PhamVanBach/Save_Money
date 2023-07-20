module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  // Add any additional configuration here
};
