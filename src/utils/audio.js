// Web Audio API Synthesizer for Interactive Desk SFX & Calming Ambient Lo-Fi Music

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.isMusicPlaying = false;
    this.ambientTimer = null;
    this.synthMasterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.synthMasterGain = this.ctx.createGain();
        this.synthMasterGain.gain.value = 0.25; // Gentle volume
        this.synthMasterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.isMusicPlaying) {
      this.stopCalmAmbientMusic();
    } else if (this.enabled && !this.isMusicPlaying) {
      this.startCalmAmbientMusic();
    }
    return this.enabled;
  }

  // Calming Ambient Lo-Fi Synth Chord Generator
  startCalmAmbientMusic() {
    if (this.isMusicPlaying || !this.enabled) return;
    this.init();
    if (!this.ctx) return;

    this.isMusicPlaying = true;

    // Peaceful pentatonic lo-fi chord frequencies (Cmaj7, Am7, Fmaj7, G7)
    const chordProgressions = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];

    let step = 0;

    const playChord = () => {
      if (!this.isMusicPlaying || !this.enabled) return;

      const now = this.ctx.currentTime;
      const notes = chordProgressions[step % chordProgressions.length];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Soft warm low-pass filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600 + Math.sin(now) * 150, now);

        // Slow swell attack and gentle decay
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.04, now + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(this.synthMasterGain);

        osc.start(now + idx * 0.08);
        osc.stop(now + 3.9);
      });

      step++;
      this.ambientTimer = setTimeout(playChord, 4000);
    };

    playChord();
  }

  stopCalmAmbientMusic() {
    this.isMusicPlaying = false;
    if (this.ambientTimer) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(850, now + 0.07);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);

      osc.connect(gain);
      gain.connect(this.synthMasterGain || this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }
}

export const soundManager = new SoundManager();
