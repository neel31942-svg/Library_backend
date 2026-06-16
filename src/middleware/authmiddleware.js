import jwt from "jsonWebToken" ;
const authMiddleware = (req, res, next) => {
  try {
    // variable to store token comming from frontend req
    // req.header.authorisation ="Bearer werty@#%^&*dfghjkvcvbhgfdf"
    const authToken = req.headers.authorization;

    // validation if there is no token inside headers
    if (!authToken || !authToken.startWith("Bearer")) {
      return res.status(401).json({
        message: "Access denied : no token provided",
      });
    }
    // extract token
    const token = authToken.slice(7); //split('')[1]

    // verufy token
    const decode = jwt.verify(token, "Neel123");    // sine in api .js se  se jwt se laye ye code dwa wala

    // store user data in request
    req.user = decode;

    // move to next
    next();

  } catch (error) {
    return res.status(401).json({
      message: "invalid or expired token ",
    });
  }
};
export default authMiddleware;
