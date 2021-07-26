import {inputImage, pictureEl} from "./utils/dom/elements-html.js";
import {EventType} from "./utils/enums/event-type.js";


inputImage.addEventListener(EventType.INPUT, e => {
    const [file] = e.currentTarget.files
    if (file) {
        pictureEl.src = URL.createObjectURL(file)
    }
})