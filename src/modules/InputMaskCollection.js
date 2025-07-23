import { getAttrNameFromSelector } from "@/utils/getAttrNameFromSelector"
import IMask from "imask"

const rootSelector = '[data-js-input-mask]'

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root) // получаем rootSelector без кавычек
    )

    IMask(this.rootElement, { mask })
  }
}

export class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}