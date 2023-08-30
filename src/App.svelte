<script lang="ts">
    import { afterUpdate } from "svelte";
    import { Hz } from "./hzStore";
    import RadioBtns from "./RadioBtns.svelte";
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


  $: console.log({
    $Hz,
    $oneEnabledStore,
    $twoEnabledStore,
    $threeEnabledStore,
    $fourEnabledStore,
    $fiveEnabledStore,
    $sixEnabledStore,
    $sevenEnabledStore,
    $eightEnabledStore,
  });

  let audioCtx = new AudioContext();

  afterUpdate(() => {
    audioCtx.close();
    audioCtx = new AudioContext();
    const start_time = audioCtx.currentTime;
    if ($oneEnabledStore) {
      const osc1 = audioCtx.createOscillator();
      osc1.type = "square"
      osc1.frequency.setValueAtTime($Hz, start_time);
      osc1.connect(audioCtx.destination);
      osc1.start();
    }
    if ($twoEnabledStore) {
      const osc2 = audioCtx.createOscillator();
      osc2.type = "square"
      osc2.frequency.setValueAtTime(2 * $Hz, start_time);
      osc2.connect(audioCtx.destination);
      osc2.start();
    }
    if ($threeEnabledStore) {
      const osc3 = audioCtx.createOscillator();
      osc3.type = "square"
      osc3.frequency.setValueAtTime(3 * $Hz, start_time);
      osc3.connect(audioCtx.destination);
      osc3.start();
    }
    if ($fourEnabledStore) {
      const osc4 = audioCtx.createOscillator();
      osc4.frequency.setValueAtTime(4 * $Hz, start_time);
      osc4.connect(audioCtx.destination);
      osc4.start();
    }
    if ($fiveEnabledStore) {
      const osc5 = audioCtx.createOscillator();
      osc5.frequency.setValueAtTime(5 * $Hz, start_time);
      osc5.connect(audioCtx.destination);
      osc5.start();
    }
    if ($sixEnabledStore) {
      const osc6 = audioCtx.createOscillator();
      osc6.frequency.setValueAtTime(6 * $Hz, start_time);
      osc6.connect(audioCtx.destination);
      osc6.start();
    }
    if ($sevenEnabledStore) {
      const osc7 = audioCtx.createOscillator();
      osc7.frequency.setValueAtTime(7 * $Hz, start_time);
      osc7.connect(audioCtx.destination);
      osc7.start();
    }
    if ($eightEnabledStore) {
      const osc8 = audioCtx.createOscillator();
      osc8.frequency.setValueAtTime(8 * $Hz, start_time);
      osc8.connect(audioCtx.destination);
      osc8.start();
    }
  })
</script>

<div>
  <div class="bg-pink-200 m-10 p-2 rounded-2xl">
    My ugly first draft of Rhythmonics!
    <!-- speed input -->
    <input bind:value={$Hz} />
    
    <RadioBtns></RadioBtns>
  </div>
  <div>
    current Hz is {$Hz}
    <button
      on:click={(evt) => {
        $Hz += 2;
      }}
    >
      increment Hz</button
    >
  </div>
</div>
