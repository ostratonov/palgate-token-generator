import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [{
    ignores: ['**/*.hbs.js', '**/*.ts'],
}, ...compat.extends('eslint:recommended'), {
    languageOptions: {
        globals: {
            ...globals.node,
            Backendless: true,
            CancelReason: true,
            CancelReasonGroup: true,
            ChatAdmin: true,
            ChatConversation: true,
            ChatCustomer: true,
            ChatPart: true,
            ChatTag: true,
            CardMachine: true,
            Case: true,
            CheckListItem: true,
            City: true,
            Consolidation: true,
            Country: true,
            CountryArea: true,
            CurrencyExchangeRate: true,
            Customer: true,
            CustomerIdsAllocation: true,
            CustomerPricing: true,
            CustomerService: true,
            DomesticEstimation: true,
            CrossBorderEstimation: true,
            DHLFacility: true,
            OpsAgent: true,
            CustomerCheckListItem: true,
            Driver: true,
            DriverDeposit: true,
            DriverLocation: true,
            DriverOnlineLog: true,
            DriverSchedule: true,
            GeoPoint: true,
            MallConsolidation: true,
            MallSubscription: true,
            MallWarehouse: true,
            Order: true,
            HistoricalOrder: true,
            OrderActivityCall: true,
            OrderActivityTask: true,
            OrderAttempt: true,
            OrderChangeLog: true,
            OrderCheckListValue: true,
            OrderPackage: true,
            OrderPayment: true,
            OrderStory: true,
            OrderStoryStatus: true,
            PaymentMethod: true,
            PaymentTransaction: true,
            Preference: true,
            NSSyncTask: true,
            NSSyncBlocked: true,
            NSSyncArchived: true,
            Settings: true,
            Subsidiary: true,
            TimeSlotsPolicy: true,
            Users: true,
            Zone: true,
            OrderChangeLogAttribute: true,
            ICAError: true,
            ICALog: true,
            ICARequest: true,
            EventSubscription: true,
            ICAUpdateTask: true,
            AnalyticsOrder: true,
            AnalyticsOrderError: true,
            Banner: true,
            OpsUser: true,
        },

        ecmaVersion: 'latest',

        parserOptions: {
            sourceType: 'module',
            node: true,
        },
    },

    rules: {
        'no-control-regex': 'off',

        'keyword-spacing': ['error', {
            before: true,
            after: true,
        }],

        'space-before-blocks': 'error',
        'no-unneeded-ternary': 'error',
        'dot-notation': 'error',
        'space-in-parens': 'error',
        'no-ex-assign': 'off',

        'no-multiple-empty-lines': ['error', {
            max: 1,
        }],

        'padding-line-between-statements': ['error', {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*',
        }, {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var'],
        }, {
            blankLine: 'always',
            prev: '*',
            next: 'return',
        }, {
            blankLine: 'always',
            prev: '*',
            next: 'block-like',
        }, {
            blankLine: 'always',
            prev: 'block-like',
            next: '*',
        }],

        'padded-blocks': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],

        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],

        'array-bracket-spacing': ['error', 'never'],
        'require-atomic-updates': 'off',

        'no-mixed-operators': ['error', {
            groups: [['&&', '?:']],
        }],

        'operator-linebreak': ['error', 'before'],
        'quote-props': ['warn', 'as-needed'],

        'no-constant-condition': ['error', {
            checkLoops: false,
        }],

        'func-style': ['warn', 'declaration', {
            allowArrowFunctions: true,
        }],

        'require-await': 'warn',
        'no-var': 'warn',
        'no-undef': 'warn',
        'no-unused-vars': 'warn',
        'max-len': ['warn', 120],
        'no-unexpected-multiline': 'error',
        semi: ['warn', 'never'],
        eqeqeq: ['warn', 'smart'],
        quotes: ['warn', 'single', 'avoid-escape'],

        'arrow-spacing': ['warn', {
            before: true,
            after: true,
        }],

        'arrow-parens': ['warn', 'as-needed'],

        'prefer-const': ['warn', {
            destructuring: 'all',
        }],

        'no-throw-literal': 'warn',

        'no-unused-expressions': ['warn', {
            allowShortCircuit: true,
        }],

        'no-trailing-spaces': ['warn', {
            skipBlankLines: false,
            ignoreComments: true,
        }],

        'object-curly-spacing': ['warn', 'always'],
        'no-sequences': 'error',
    },
}]