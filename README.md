# clase1

An alternative version of the website [juanmunguia.com](https://www.juanmunguia.com/).

## 🛠 Project Setup

This project is built using plain HTML, CSS, and JavaScript, with the following tools for linting and formatting:

- [Prettier](https://prettier.io/) – Code formatter
- [Stylelint](https://stylelint.io/) – CSS linter
- [ESLint](https://eslint.org/) – JavaScript linter (Flat Config)

## 📦 Install Dependencies

```bash
npm install
```

## ✅ Linting & Formatting Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run lint`     | Run ESLint and Stylelint             |
| `npm run lint:fix` | Auto-fix ESLint and Stylelint issues |
| `npm run lint:js`  | Lint JavaScript only                 |
| `npm run lint:css` | Lint CSS only                        |

## 💻 VS Code Setup

Make sure you have the following extensions installed:

- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Your `.vscode/settings.json` should include:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": [
    "source.organizeImports",
    "source.sortImports",
    "source.fixAll"
  ],
  "stylelint.validate": ["css", "html"]
}
```

This ensures that ESLint and Stylelint auto-fix your code on save.

## 🧪 Try it Out

Make changes to any `.html`, `.js` or `.css` file and save it — formatting and linting will be automatically applied.

---

Enjoy building! 🎉
