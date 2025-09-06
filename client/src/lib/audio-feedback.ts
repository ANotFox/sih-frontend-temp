// Audio feedback system for accessibility
// Uses Web Audio API to generate simple tones

class AudioFeedback {
  private audioContext: AudioContext | null = null;

  constructor() {
    // Audio context will be initialized on first use
  }

  private initializeAudio() {
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
      try {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.warn('Audio feedback not available:', error);
      }
    }
  }

  private async ensureAudioContext() {
    if (!this.audioContext) {
      this.initializeAudio();
    }

    if (this.audioContext && this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume();
      } catch (error) {
        console.warn('Could not resume audio context:', error);
      }
    }
  }

  private createTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = type;

    // Create smooth fade in/out to avoid clicking
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + duration - 0.01);
    gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  async playSuccess() {
    // Audio will be controlled by accessibility context in actual usage
    await this.ensureAudioContext();
    
    // Play a pleasant ascending chord
    setTimeout(() => this.createTone(523.25, 0.1), 0);   // C5
    setTimeout(() => this.createTone(659.25, 0.1), 50);  // E5
    setTimeout(() => this.createTone(783.99, 0.2), 100); // G5
  }

  async playError() {
    // Audio will be controlled by accessibility context in actual usage
    await this.ensureAudioContext();
    
    // Play a distinctive error sound (descending tones)
    setTimeout(() => this.createTone(400, 0.1, 'square'), 0);
    setTimeout(() => this.createTone(300, 0.15, 'square'), 100);
  }

  async playNotification() {
    await this.ensureAudioContext();
    
    // Play a gentle notification sound
    this.createTone(800, 0.1);
    setTimeout(() => this.createTone(1000, 0.1), 150);
  }
}

export const audioFeedback = new AudioFeedback();