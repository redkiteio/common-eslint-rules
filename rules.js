const rules = {
    // v.1.4 (2021-09-20)
    '@typescript-eslint/no-explicit-any': 0,
    'arrow-parens': [1, 'as-needed'],
    'brace-style': [1, 'stroustrup', { allowSingleLine: true }],
    'class-methods-use-this': 0,
    'func-names': [1, 'always', { generators: 'never' }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': [1, { allow: ['error', 'info', 'warning'] }],
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'always',
        ObjectPattern: { minProperties: 2 },
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
  };

export default rules;
