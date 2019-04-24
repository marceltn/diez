class Diez {
  constructor (componentType) {
    this.iframe = document.createElement('iframe');
    this.component = new componentType();
    this.subscribers = [];
  }

  broadcast () {
    for (const subscriber of this.subscribers) {
      subscriber(this.component);
    }
  }

  subscribe (subscriber) {
    this.subscribers.push(subscriber);
  }

  attach (subscriber) {
    subscriber(this.component);
    this.subscribe(subscriber);
    if (this.iframe.contentWindow) {
      return;
    }
    this.iframe.src = `${Environment.serverUrl}components/${this.component.constructor.name}`;
    this.iframe.width = '0';
    this.iframe.height = '0';
    this.iframe.style.display = 'none';
    document.body.appendChild(this.iframe);
    window.addEventListener('message', (event) => {
      if (event.origin === Environment.serverUrl) {
        this.component.update(JSON.parse(event.data));
        this.broadcast();
      }
    });
  }
}

module.exports.Diez = Diez;