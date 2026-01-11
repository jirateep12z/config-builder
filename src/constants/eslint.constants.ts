import type { EslintConfig } from '@/types';

export const BASE_ESLINT_CONFIG: EslintConfig = {
  extends: ['eslint:recommended'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }
    ],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: false, allowTernary: false }
    ],
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }]
  }
};

export const TYPESCRIPT_ESLINT_CONFIG: EslintConfig = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};

export const REACT_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true
  }
};

export const VUE_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules,
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/prop-name-casing': 'off',
    'vue/no-v-html': 'warn',
    'vue/html-self-closing': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  }
};

export const NEXTJS_ESLINT_CONFIG: EslintConfig = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    },
    next: {
      rootDir: './'
    }
  },
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  }
};

export const NUXT_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules,
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/prop-name-casing': 'off',
    'vue/no-v-html': 'warn'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  }
};

export const ASTRO_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  }
};

export const SVELTE_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'svelte'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2021: true
  }
};

export const LARAVEL_ESLINT_CONFIG: EslintConfig = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  }
};

export const ANGULAR_ESLINT_CONFIG: EslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@angular-eslint'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  }
};

export const NESTJS_ESLINT_CONFIG: EslintConfig = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...TYPESCRIPT_ESLINT_CONFIG.rules,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    node: true,
    es2021: true
  }
};

export const ESLINT_DEV_DEPENDENCIES: Record<string, string[]> = {
  vanilla: ['eslint', '@eslint/js', 'typescript-eslint', 'typescript'],
  vite: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  ],
  react: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  ],
  vue: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-vue',
    'vue-eslint-parser'
  ],
  nextjs: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    '@next/eslint-plugin-next'
  ],
  nuxt: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-vue',
    'vue-eslint-parser'
  ],
  astro: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-astro'
  ],
  svelte: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    'eslint-plugin-svelte',
    'svelte-eslint-parser'
  ],
  laravel: ['eslint', '@eslint/js', 'typescript-eslint', 'typescript'],
  nestjs: ['eslint', '@eslint/js', 'typescript-eslint', 'typescript'],
  angular: [
    'eslint',
    '@eslint/js',
    'typescript-eslint',
    'typescript',
    '@angular-eslint/eslint-plugin',
    '@angular-eslint/template-parser'
  ]
};
