import { h, app } from "hyperapp"

const state = {
  count: 0,
  str :""
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
  add: value => state => ({str: state.str + value})
}

const view = (state, actions) =>
  h("div", {}, [
    h("h2", {}, state.count),
    h("h2", {}, state.str),
    h("button", { onclick: () => actions.down(1) }, "–"),
    h("button", { onclick: () => actions.up(1) }, "+"),
    h("button", { onclick: () => actions.add("hoge") }, "AddHoge")
  ])

const main = app(state, actions, view, document.body)
