const whitelist = ['', 'posts', 'login', 'secret'];

export default (req, res, next) => {
  const firstParam = req.path.split('/')[1];
  if (!whitelist.includes(firstParam)) {
    res.redirect('/');
    return;
  }

  next();
};
