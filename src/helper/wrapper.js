module.exports = (parameters) => {
   const { callback, params } = parameters;
   callback?.();
}