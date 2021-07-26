import {pictureEl, pictureFilterEl} from "./utils/dom/elements-html.js";
import {EventType} from "./utils/enums/event-type.js";

pictureFilterEl.addEventListener(EventType.INPUT, _ => {
    pictureEl.style.filter = pictureFilterEl.value
})