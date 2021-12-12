class Platform {
  sendMessage() {}
}

class Web extends Platform {
  constructor() {
    super();
  }

  sendMessage(message) {
    console.log(`ON WEB: ${message}.`);
  }
}

class Mobile extends Platform {
  constructor() {
    super();
  }

  sendMessage(message) {
    console.log(`ON MOBILE: ${message}.`);
  }
}

class EventManager {
  constructor() {
    this.subscribers = [];
  }

  subscribe(platform) {
    this.subscribers.push(platform)
  }

  unsubscribe(platform) {
    this.subscribers = this.subscribers.filter((p) => p !== platform);
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
user.text("Hello there!");

user.events.subscribe(web);
user.text("How are you doing?");
