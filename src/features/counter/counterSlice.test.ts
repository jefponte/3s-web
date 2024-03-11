import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import type { CounterSliceState } from "./counterSlice"
import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice"

interface LocalTestContext {
  store: AppStore
}

describe("counter reducer", it => {
  it("should handle initial state", () => {
    expect(counterSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      value: 0,
      status: "idle",
    })
  })

})
