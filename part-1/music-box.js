(function () {
  if (window.MusicBox) return;
  let ctx, master, timer, nodes;
  const N = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, C3: 130.81, F3: 174.61, G3: 196, E3: 164.81, A3: 220 };
  const MEL = "C4 C4 G4 G4 A4 A4 G4- F4 F4 E4 E4 D4 D4 C4- G4 G4 F4 F4 E4 E4 D4- G4 G4 F4 F4 E4 E4 D4- C4 C4 G4 G4 A4 A4 G4- F4 F4 E4 E4 D4 D4 C4-".split(" ");
  const BASS = ["C3", "C3", "F3", "C3", "F3", "C3", "G3", "C3", "C3", "F3", "C3", "G3", "C3", "F3", "C3", "G3", "C3", "C3", "F3", "C3", "F3", "C3", "G3", "C3"];
  const BEAT = 0.62;
  function tine(f, t, vol, oct) {
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    g.connect(nodes.bus);
    [[1, 1], [2, 0.18], [oct, 0.05]].forEach(([m, a]) => {
      const o = ctx.createOscillator(), og = ctx.createGain(); o.type = "sine"; o.frequency.value = f * m; og.gain.value = a;
      o.connect(og); og.connect(g); o.start(t); o.stop(t + 2.7);
    });
  }
  function start() {
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    ctx = ctx || new AC(); ctx.resume();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 4200; lp.connect(master);
    const d1 = ctx.createDelay(); d1.delayTime.value = 0.31; const fb = ctx.createGain(); fb.gain.value = 0.38; const wet = ctx.createGain(); wet.gain.value = 0.3;
    d1.connect(fb); fb.connect(d1); d1.connect(wet); wet.connect(lp);
    const bus = ctx.createGain(); bus.connect(lp); bus.connect(d1);
    nodes = { bus };
    let t = ctx.currentTime + 0.2, i = 0, beat = 0, rate = 1;
    const sched = () => {
      while (t < ctx.currentTime + 1.2) {
        const tok = MEL[i % MEL.length], long = tok.endsWith("-"), f = N[tok.replace("-", "")];
        const sw = 1 + (Math.random() - 0.5) * 0.04;
        tine(f * 2, t, 0.16, 5.4);
        if (beat % 2 === 0) { const b = N[BASS[(beat / 2) % BASS.length]]; tine(b * 2, t, 0.07, 4.1); }
        if (long) tine(N[BASS[(beat / 2 | 0) % BASS.length]] * 3, t + BEAT * rate, 0.05, 4.1);
        const d = (long ? 2 : 1) * BEAT * rate * sw;
        t += d; beat += long ? 2 : 1; i++;
        if (i % MEL.length === 0) { t += BEAT * 3; rate = 1 + (Math.random() * 0.12); }
      }
    };
    sched(); timer = setInterval(sched, 300);
    master.gain.setTargetAtTime(0.55, ctx.currentTime, 0.8);
  }
  function stop() {
    clearInterval(timer); if (!master || !ctx) return;
    const m = master; master = null; m.gain.setTargetAtTime(0, ctx.currentTime, 0.35);
    setTimeout(() => m.disconnect(), 2500);
  }
  window.MusicBox = { start, stop };
})();
