export {}

interface WrapperParameters {
   callback?: Function;
   params?: object;
}

module.exports = (parameters: WrapperParameters) => {
   const { callback, params } = parameters;
   callback?.();
}