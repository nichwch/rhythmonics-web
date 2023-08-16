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

  let audioCtx = new AudioContext();

  $: {
    audioCtx.close();
    audioCtx = new AudioContext();
    const start_time = audioCtx.currentTime + 0.5;
    if (one_enabled) {
      const osc1 = audioCtx.createOscillator();
      osc1.frequency.setValueAtTime(speed, start_time);
      osc1.connect(audioCtx.destination);
      osc1.start();
    }
    if (two_enabled) {
      const osc2 = audioCtx.createOscillator();
      osc2.frequency.setValueAtTime(2 * speed, start_time);
      osc2.connect(audioCtx.destination);
      osc2.start();
    }
    if (three_enabled) {
      const osc3 = audioCtx.createOscillator();
      osc3.frequency.setValueAtTime(3 * speed, start_time);
      osc3.connect(audioCtx.destination);
      osc3.start();
    }
    if (four_enabled) {
      const osc4 = audioCtx.createOscillator();
      osc4.frequency.setValueAtTime(4 * speed, start_time);
      osc4.connect(audioCtx.destination);
      osc4.start();
    }
    if (five_enabled) {
      const osc5 = audioCtx.createOscillator();
      osc5.frequency.setValueAtTime(5 * speed, start_time);
      osc5.connect(audioCtx.destination);
      osc5.start();
    }
    if (six_enabled) {
      const osc6 = audioCtx.createOscillator();
      osc6.frequency.setValueAtTime(6 * speed, start_time);
      osc6.connect(audioCtx.destination);
      osc6.start();
    }
    if (seven_enabled) {
      const osc7 = audioCtx.createOscillator();
      osc7.frequency.setValueAtTime(7 * speed, start_time);
      osc7.connect(audioCtx.destination);
      osc7.start();
    }
    if (eight_enabled) {
      const osc8 = audioCtx.createOscillator();
      osc8.frequency.setValueAtTime(8 * speed, start_time);
      osc8.connect(audioCtx.destination);
      osc8.start();
    }
  }
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
