const rules = {
  // v.1.3 (2021-03-12)
  'arrow-parens': [1, 'as-needed'],
  'brace-style': [1, 'stroustrup'],
  'class-methods-use-this': 0,
  'func-names': [1, 'always', { generators: 'never' }],
  'import/prefer-default-export': 0,
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
