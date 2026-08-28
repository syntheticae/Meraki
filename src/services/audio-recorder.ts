/**
 * Browser Audio Recorder helper for Speaking & Shadowing practice
 * Runs entirely in the client using MediaRecorder & Web Audio API.
 */
export class BrowserAudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private audioUrl: string | null = null;

  async startRecording(): Promise<boolean> {
    if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      console.warn('Audio recording is not supported in this browser');
      return false;
    }

    try {
      this.cleanup();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      return true;
    } catch (err) {
      console.error('Failed to start audio recording:', err);
      return false;
    }
  }

  stopRecording(): Promise<string | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioUrl = URL.createObjectURL(audioBlob);

        // Stop all tracks to release microphone
        this.mediaRecorder?.stream?.getTracks().forEach((track) => track.stop());
        resolve(this.audioUrl);
      };

      this.mediaRecorder.stop();
    });
  }

  cleanup(): void {
    if (this.audioUrl) {
      URL.revokeObjectURL(this.audioUrl);
      this.audioUrl = null;
    }
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stream?.getTracks().forEach((track) => track.stop());
      this.mediaRecorder.stop();
    }
    this.audioChunks = [];
  }
}
