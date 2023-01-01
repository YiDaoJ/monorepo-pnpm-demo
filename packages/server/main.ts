import Stubr, { Method } from "stubr";

// instantiate Stubr
const stubr = new Stubr({
  stubsPort: 4080,
  uiPort: 5001,
});

stubr.register({
  name: "GET TEST",
  route: "/test",
  method: Method.GET,
  validate: (
    requestHeaders: object,
    requestBody: object,
    requestParams: object
  ) => {
    return true;
  },
  responseCode: 200,
  responseBody: {
    message: "test passed!",
  },
});

// start
stubr.run();
