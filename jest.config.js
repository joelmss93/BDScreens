module.exports = {
  // testIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(jpg|jpeg|png|gif)$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  resetMocks: true,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
}
