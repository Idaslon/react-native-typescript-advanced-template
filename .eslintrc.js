module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'airbnb',

    "plugin:react/recommended",
    'plugin:react-native/all',

    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/recommended',

    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // impliedStrict: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',

    'prettier',
    '@typescript-eslint',

    // 'import',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'import/prefer-default-export': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',

    "camelcase": "off",
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    "import/resolver": {
      typescript: {},
      "babel-plugin-root-import": {
        rootPathSuffix: "src",
        rootPathPrefix: "~"
      },
    }
  },
};
