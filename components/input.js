class Input {
  constructor(config) {
    this.el = document.createElement("input");
    if (config?.placeholder) {
      this.el.setAttribute("placeholder", config.placeholder);
    }
    this.el.classList.add('app-input')
    this.el.setAttribute("id", config.id);
    this.el.setAttribute("type", config.type ?? "text");
    this.el.setAttribute("required", config.notRequired ?? "required")
    this.el.setAttribute("name", config.name)
    this.el.setAttribute("auto-complete", config.autoComplete ?? "off")
  }

  getElement() {
    return this.el;
  }
}

