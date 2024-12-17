import { ReplaySubject } from 'rxjs';

export class EventBus {
  private events = new Map<string, ReplaySubject<any>>();

  // Emit an event with a specific key
  emit(eventKey: string, payload: any): void {
    if (!this.events.has(eventKey)) {
      // Create a ReplaySubject with a buffer size of 1 (only store the latest event)
      this.events.set(eventKey, new ReplaySubject<any>(1));
    }
    this.events.get(eventKey)!.next(payload);
  }

  // Listen to an event with a specific key
  on(eventKey: string, callback: (data: any) => void): void {
    if (!this.events.has(eventKey)) {
      this.events.set(eventKey, new ReplaySubject<any>(1));
    }
    // Subscribe to the event and immediately receive the latest event
    this.events.get(eventKey)!.subscribe(callback);
  }

  // Optional: clear all listeners for an event
  clear(eventKey: string): void {
    if (this.events.has(eventKey)) {
      this.events.get(eventKey)!.complete();
      this.events.delete(eventKey);
    }
  }
}

// Export a singleton instance of EventBus
const eventBus = new EventBus();
export default eventBus;
