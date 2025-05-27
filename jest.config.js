module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Optionnel : adapte le chemin si tes tests sont ailleurs
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
};
