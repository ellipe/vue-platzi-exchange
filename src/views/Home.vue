<template>
  <div>
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    </div>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import { BounceLoader } from '@saeris/vue-spinners'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: {
    PxAssetsTable,
    BounceLoader
  },

  data() {
    return {
      assets: [],
      isLoading: false
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
