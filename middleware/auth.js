module.exports = {
  Authenticator: (res,req,next) => {
    if(req.isAuthenticated()) {
      return next()
    }
  }






}