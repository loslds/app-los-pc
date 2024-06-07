
module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "root": true,
  "env": { "browser": true, "es2020": true },
  "extends": [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin: react/recommended",
    "plugin:react-hooks/recommended",
    "plugin: prettier/recommended",
    "prettier"
  ],
  "overrides":[],
  "parser": '@typescript-eslint/parser',
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "plugin":[ 
    "react",
    "@typescript-eslint/recommended",
    "react-hooks",
    "react-refresh",
    "eslint-plugin-import-helpers"
  ],
  "parserOption":{
  //   "ecmaVercion": 'latest',
    "sourceType": 'module'
  },
  
  "rules": {
    "react-hooks/rules-of-hooks":'error',
    "react-hooks/exhaustive": "warn",
    "react/react-in-jsx-scope":"off",
    "react-refresh/only-export-components": [ "warn" ],
    "allowConstantExport": "true",
    "prettier/prettier": "error",
    "eslint-plugin-import-helpers":[ 
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          ["/^react/^"],
          "/components/",
          "/module",
          "/^@shared/",
          "/absolute/",
          
          ["parent","sibling","index"]
        ],
        "alphabetize": {"order": "asc", "ignoreCase": false}        
      }
    ]
  }
}
