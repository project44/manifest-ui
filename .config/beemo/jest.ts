export default {
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
};
