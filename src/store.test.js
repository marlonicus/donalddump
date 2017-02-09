import Store from './store'

let component = {}

beforeEach(() => {
  component = new Store()
})

describe(`Store`, () => {
  describe(`mapStoreToStateObject()`, () => {
    test(`Maps undefined to given key`, () => {
      const result = component.mapStoreToStateObject({
        foo: `foo`
      }, `bar`)

      expect(result).toEqual({
        foo: `foo`,
        bar: undefined,
      })
    })
  })

  describe(`getInitialStateObjectFromReducerKeys()`, () => {
    test(`Maps each reducer key to a new empty object`, () => {
      const reducerKeys = Object.keys({
        foo: `foo`,
        bar: `bar`,
        bax: `baz`,
      })

      const result = component.getInitialStateObjectFromReducerKeys({ reducerKeys })
      expect(result).toEqual({
        foo: undefined,
        bar: undefined,
        bax: undefined,
      })
    })
  })

  describe(`reduceStateObject()`, () => {
    test(`Reduces store and maps it to new state object`, () => {
      const state = { foo: `bar`, baz: `boz` }
      const store = `foo`
      const action = `qux`
      const reducer = (state, action) => `flob`
      const result = component.reduceStateObject({ state, store, action, reducer })
      expect(result).toEqual({
        foo: `flob`,
        baz: `boz`,
      })
    })

    test(`Runs state object against reducer with correct params`, () => {
      const state = { foo: `bar`, baz: `boz` }
      const store = `foo`
      const action = `qux`
      const reducer = jest.fn().mockReturnValue(`blah`)
      const result = component.reduceStateObject({ state, store, action, reducer })
      expect(reducer).toHaveBeenCalledWith({
        state: state[store],
        action,
      })
    })
  })
});
