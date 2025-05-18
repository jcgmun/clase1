const word = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
const block = word;
const element = `(?:__${word})?`;
const modifier = `(?:--${word})?`;
const bemPattern = `^${block}${element}${modifier}$`;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'max-nesting-depth': 3,
    'selector-class-pattern': bemPattern,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
  },
};
