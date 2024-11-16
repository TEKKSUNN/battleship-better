module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    // Match static file extensions like .css, .jpg, etc.
    '\\.(css|less|scss|sass|jpg|jpeg|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
