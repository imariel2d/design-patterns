class Platform {
  sendMessage() {}
}

class Web extends Platform {
  constructor() {
    super();
  }

  sendMessage() {
    console.log('RECEIVED MESSAGE ON WEB.');
  }
}

class Mobile extends Platform {
  constructor() {
    super();
  }

  sendMessage() {
    console.log('RECEIVED MESSAGE ON MOBILE.')
  }
}

class EventManager {
  constructor() {
    this.subscribers = [];
  }

  subscribe(message) {
    this.subscribers.push(message)
  }

  unsubscribe(message) {
    this.subscribers = this.subscribers.filter((m) => m !== message);
  }

  notify(message) {
    this.subscribers.forEach((platform) => platform.sendMessage(message));
  }
}

class User {
  constructor() {
    this.events = new EventManager();
  }

  text(message) {
    this.events.notify(message);
  }
}

const user = new User();

const mobile = new Mobile();
const web = new Web();

user.events.subscribe(mobile);
user.text("WOLA QUE ONDA");

user.events.subscribe(web);
user.text("taquitos al pastor");
