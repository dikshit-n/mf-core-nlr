// utils/event-bus.ts
import { Subject } from "rxjs";

const subject = new Subject<any>();
class EventBus {
  emit(event: string, payload: any) {
    subject.next({ event, payload });
  }

  // Subscribe to events
  on(event: string, callback: (payload: any) => void) {
    const subscription = subject.subscribe((data) => {
      if (data.event === event) {
        callback(data.payload);
      }
    });
    return subscription; // Return subscription to allow cleanup
  }
}
const eventBus = new EventBus();
export default eventBus;
