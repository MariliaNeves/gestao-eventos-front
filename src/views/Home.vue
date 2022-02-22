<template>
  <div class="home">
    <Cidades />
  </div>
</template>

<script>
import Cidades from '@/components/Cidades';

export default {
  name: 'Home',
  components: { Cidades },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
