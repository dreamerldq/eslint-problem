<template>
<div class="app">
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
