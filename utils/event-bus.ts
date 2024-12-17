// utils/event-bus.ts
import { Subject } from "rxjs";

// Create a Subject for intra-tab communication
const subject = new Subject<any>();

// BroadcastChannel for inter-tab communication
const broadcastChannel = new BroadcastChannel("global-events");

class EventBus {
  // Emit events both within the tab and across tabs
  emit(event: string, payload: any) {
    subject.next({ event, payload });
    //broadcastChannel.postMessage({ event, payload }); // Send to other tabs
  }

  // Subscribe to events
  on(event: string, callback: (payload: any) => void) {
    const subscription = subject.subscribe((data) => {
      if (data.event === event) {
        callback(data.payload);
      }
    });

    // Listen to BroadcastChannel for inter-tab events
    broadcastChannel.onmessage = (message) => {
      if (message.data.event === event) {
        callback(message.data.payload);
      }
    };

    return subscription; // Return subscription to allow cleanup
  }
}
const eventBus = new EventBus();
export default eventBus;
