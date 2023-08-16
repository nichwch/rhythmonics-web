<script lang="ts">
  let speed = 0;
  let one_enabled = false;
  let two_enabled = false;
  let three_enabled = false;
  let four_enabled = false;
  let five_enabled = false;
  let six_enabled = false;
  let seven_enabled = false;
  let eight_enabled = false;

  $: console.log({
    speed,
    one_enabled,
    two_enabled,
    three_enabled,
    four_enabled,
    five_enabled,
    six_enabled,
    seven_enabled,
    eight_enabled,
  });


  const audioCtx = new AudioContext();

  const osc = audioCtx.createOscillator();

  osc.connect(audioCtx.destination)

  osc.start()


</script>

<div>
  <div class="border border-black m-10 p-2">
    My ugly first draft of Rhythmonics!
    <!-- speed input -->
    <input bind:value={speed} />
    <!-- 1 -->
    <input type="checkbox" bind:checked={one_enabled} />
    <!-- 2 -->
    <input type="checkbox" bind:checked={two_enabled} />
    <!-- 3 -->
    <input type="checkbox" bind:checked={three_enabled} />
    <!-- 4 -->
    <input type="checkbox" bind:checked={four_enabled} />
    <!-- 5 -->
    <input type="checkbox" bind:checked={five_enabled} />
    <!-- 6 -->
    <input type="checkbox" bind:checked={six_enabled} />
    <!-- 7 -->
    <input type="checkbox" bind:checked={seven_enabled} />
    <!-- 8 -->
    <input type="checkbox" bind:checked={eight_enabled} />
    <!-- overtones -->
  </div>
  <div>
    current speed is {speed}
    <button
      on:click={(evt) => {
        speed += 2;
      }}
    >
      increment speed</button
    >
  </div>
</div>
