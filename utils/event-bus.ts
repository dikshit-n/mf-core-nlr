import { BehaviorSubject } from "rxjs";

const broadcastChannel = new BroadcastChannel("microfrontend-events");

// RxJS Event Bus
class EventBus {
  private event$ = new BehaviorSubject<any>(null);

  emit(event: string, payload: any) {
    const data = { event, payload };
    this.event$.next(data);
    // Send event via BroadcastChannel for cross-tab communication
    broadcastChannel.postMessage(data);
  }

  on(event: string, callback: (payload: any) => void) {
    // Listen to events internally via RxJS
    this.event$.subscribe((data) => {
      if (data && data.event === event) {
        callback(data.payload);
      }
    });
    // Listen to events via BroadcastChannel
    broadcastChannel.onmessage = (message) => {
      if (message.data.event === event) {
        callback(message.data.payload);
      }
    };
  }
}

export const eventBus = new EventBus();
