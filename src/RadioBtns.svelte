<script lang="ts">
  import {
    oneEnabledStore,
    twoEnabledStore,
    threeEnabledStore,
    fourEnabledStore,
    fiveEnabledStore,
    sixEnabledStore,
    sevenEnabledStore,
    eightEnabledStore,
  } from "./overtonesStore";
</script>

<!-- 1 -->
<input type="checkbox" bind:checked={$oneEnabledStore} />
<!-- 2 -->
<input type="checkbox" bind:checked={$twoEnabledStore} />
<!-- 3 -->
<input type="checkbox" bind:checked={$threeEnabledStore} />
<!-- 4 -->
<input type="checkbox" bind:checked={$fourEnabledStore} />
<!-- 5 -->
<input type="checkbox" bind:checked={$fiveEnabledStore} />
<!-- 6 -->
<input type="checkbox" bind:checked={$sixEnabledStore} />
<!-- 7 -->
<input type="checkbox" bind:checked={$sevenEnabledStore} />
<!-- 8 -->
<input type="checkbox" bind:checked={$eightEnabledStore} />
<!-- overtones -->
