import { BehaviorSubject, filter } from "rxjs";

const broadcastChannel = new BroadcastChannel("microfrontend-events");

class EventBus {
  private event$ = new BehaviorSubject<any>(null);

  emit(event: string, payload: any) {
    const data = { event, payload };
    this.event$.next(data);
    broadcastChannel.postMessage(data);
  }

  on(event: string, callback: (payload: any) => void) {
    // Filter out null emissions and match event names
    this.event$
      .pipe(filter((data) => data && data.event === event))
      .subscribe((data) => callback(data.payload));

    // Handle BroadcastChannel messages without overwriting existing handlers
    broadcastChannel.addEventListener("message", (message) => {
      if (message.data && message.data.event === event) {
        callback(message.data.payload);
      }
    });
  }
}

const eventBus = new EventBus();
export default eventBus;
