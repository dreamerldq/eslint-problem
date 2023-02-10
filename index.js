const { ESLint } = require('eslint');
const fs  = require('fs');
const testCode =
`<template><div class="app">
    <XXRank
    :rank-type="rankType"
    :ranks="ranks"
    :desc="desc"
    :value-icon="valueIcon"
    :show-vip-icon="false"
    :list-config="listConfig"
    @refresh="handleRefresh"
  >
      <template #rank-time>
      
      
      
      
      
      
      
        <RankTime
    v-if="RankTimeConfig.countTime"
    :unit-color="RankTimeConfig.unitColor"
    :num-color="RankTimeConfig.numColor"
    :count-time="RankTimeConfig.countTime"
    :time-type="RankTimeConfig.timeType"
    :num-bg="RankTimeConfig.numBg"
    :label-image="RankTimeConfig.labelImage"
    @refresh="handleRefresh"
  />
      </template>

    </XXRank>
  </div>
</template>
`;

(async function main() {
    // 1. Create an instance
    const eslint = new ESLint({
        useEslintrc: false,
        fix: true,
        overrideConfig: {
            parser: 'vue-eslint-parser',
            extends: ['plugin:vue/recommended', 'eslint:recommended'],
            rules: {
                'vue/comment-directive': 'off',
                'vue/block-tag-newline': 'error',
                'vue/html-self-closing': 'error',
                'vue/html-indent': ["error", 2, {
                    'attribute': 1,
                    'baseIndent': 1,
                    'alignAttributesVertically': false
                }],
                'indent': ['error', 4, {SwitchCase: 1}],
                'quotes': ['error', 'single', {avoidEscape: false, allowTemplateLiterals: true}],
                'quote-props': ['error', 'consistent-as-needed', { 'keywords': true }],

            },
        },
    });

    // 2. Lint text.
    const results = await eslint.lintText(testCode);
    fs.writeFileSync('index.vue', results[0].output)


})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});





































