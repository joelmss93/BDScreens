module.exports = {
  // testIgnorePatterns: ['/node_modules/', '/.husky/', '/.vscode/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  resetMocks: true,
}
