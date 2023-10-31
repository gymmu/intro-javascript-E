const assert = chai.assert

describe("Exercise 1", () => {
  it("The function 'sayHello()' must exist", () => {
    assert.equal(typeof sayHello, "function")
  })
})

describe("Exercise 2", () => {
  it("The function 'changeBackground()' must exist", () => {
    assert.equal(typeof changeBackground, "function")
  })
  it("Should change the background color of the body", () => {
    const body = document.querySelector("body")
    const bgColor = document.querySelector("body").style.backgroundColor
    changeBackground()
    const bgColorNew = document.querySelector("body").style.backgroundColor
    assert.notEqual(bgColor, bgColorNew)
    body.style.backgroundColor = bgColor
  })
})

describe("Exercise 3", () => {
  it("The function 'deleteText()' must exist", () => {
    assert.equal(typeof deleteText, "function")
  })
  it("There must be an element with the id 'to-delete'", () => {
    const elem = document.querySelector("#to-delete")
    assert.notEqual(elem, null)
  })
  it("The text from the element #to-delete must be set to 'content deleted'.", () => {
    const elem = document.querySelector("#to-delete")
    const textBefore = elem.textContent
    deleteText()
    const textAfter = elem.textContent
    assert.notEqual(textBefore, textAfter)
    assert.equal(textAfter, "content deleted")
    elem.textContent = textBefore
  })
})

describe("Exercise 4", () => {
  it("The function 'incrementCounter()' must exist", () => {
    assert.equal(typeof incrementCounter, "function")
  })
  it("There must be an HTML element with the id 'counter'.", () => {
    const elem = document.querySelector("#counter")
    assert.notEqual(elem, null)
  })
  it("The counter should increase by one every time the function 'incrementCounter()' is applied.", () => {
    const elem = document.querySelector("#counter")
    const counterBefore = parseInt(elem.textContent)
    incrementCounter()
    const counterAfter = parseInt(elem.textContent)
    assert.notEqual(counterBefore, counterAfter)
    assert.equal(counterAfter, counterBefore + 1)
    elem.textContent = counterBefore
  })
})

describe("Exercise 5", () => {
  it("The function 'decrementCounter()' must exist", () => {
    assert.equal(typeof decrementCounter, "function")
  })
  it("There must be an HTML element with the id 'counter'.", () => {
    const elem = document.querySelector("#counter")
    assert.notEqual(elem, null)
  })
  it("The counter should decrease by one every time the function 'decrementCounter()' is applied.", () => {
    const elem = document.querySelector("#counter")
    const counterBefore = parseInt(elem.textContent)
    decrementCounter()
    const counterAfter = parseInt(elem.textContent)
    assert.notEqual(counterBefore, counterAfter)
    assert.equal(counterAfter, counterBefore - 1)
    elem.textContent = counterBefore
  })
})

describe("Exercise 6", () => {
  it("The function 'resetCounter()' must exist", () => {
    assert.equal(typeof resetCounter, "function")
  })
  it("There must be an HTML element with the id 'counter'.", () => {
    const elem = document.querySelector("#counter")
    assert.notEqual(elem, null)
  })
  it("The counter should be set to zero when the function 'resetCounter()' is applied.", () => {
    const elem = document.querySelector("#counter")
    const counterBefore = parseInt(elem.textContent)
    resetCounter()
    const counterAfter = parseInt(elem.textContent)
    assert.equal(counterAfter, 0)
    elem.textContent = counterBefore
  })
})

describe("Exercise 7", () => {
  it("The function 'writeText()' must exist", () => {
    assert.equal(typeof writeText, "function")
  })
  it("There must be an HTML element with the id 'input'.", () => {
    const elem = document.querySelector("input#input")
    assert.notEqual(elem, null)
  })
  it("There must be an HTML element with the id 'output'.", () => {
    const elem = document.querySelector("#output")
    assert.notEqual(elem, null)
  })
  it("The text from the input element #input, should be written into the output element #output.", () => {
    const input = document.querySelector("#input")
    const inputText = input.value
    const output = document.querySelector("#output")
    const outputBefore = output.textContent
    writeText()
    const outputTextAfter = output.textContent
    assert.equal(outputTextAfter, outputBefore + "\n" + inputText)
    output.textContent = outputBefore
  })
})
