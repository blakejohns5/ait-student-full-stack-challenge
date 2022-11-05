import jwt from 'jsonwebtoken';




const verifyToken = (req, res, next) => {
  console.log(req.user)
  // get bearer token
  let bearerToken;
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined')  { 
    bearerToken = bearerHeader.split(' ')[1];
  } else {
    res.status(403).send('Access denied')
  }
  jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
    if (err) {
      res.status(403).send('Access denied');
    }
    req.user = authData;
    next();
  });
}




export { verifyToken };