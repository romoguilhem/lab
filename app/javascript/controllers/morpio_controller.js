import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="morpio"
export default class extends Controller {
  static targets = ["cell"];

  connect() {
    const element = this.cellTarget;
    console.log(element);
    element.addEventListener("click", (event) => {
      element.addClass("Cross");
    });
    console.log(element);
  }
}
