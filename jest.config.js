// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/fileTransformer.js'
  },
  setupFiles: ['<rootDir>/tests/enzyme.config.js'],
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  reporters: ['default',
    ['jest-junit',
      {
        'suiteName': 'UI tests',
        'output': './test/reports/junit-report.xml',
        'classNameTemplate': '{classname}',
        'titleTemplate': '{title}'
      }
    ]
  ]
}