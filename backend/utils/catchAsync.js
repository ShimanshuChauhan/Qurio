export default catchAsync = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(err => {
    // Log the error for debugging purposes
    // console.error('Async Error:', err);

    // Pass the error to the next middleware
    next(err);
  });
}