// @errors: 2578
type JSONObject = {
    [key:string] : JSONObject | boolean | number | string | null | JSONArray;
}
type JSONArray = Array<JSONObject | boolean | number | string | null | JSONArray >;
type JSONValue = JSONArray | JSONObject | boolean | string | number | null;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {
    console.log(arg)
}

// POSITIVE test cases (must pass)
isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello" })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => "")
// @ts-expect-error
isJSON(class {})
// @ts-expect-error
isJSON(undefined)
// @ts-expect-error
isJSON(new BigInt(143))
// @ts-expect-error
isJSON(isJSON)