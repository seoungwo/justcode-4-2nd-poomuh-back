const userService = require("../services/userService");

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      err.errHandler({
        statusCode: 500,
        message: "KeyError",
      });
    }

    const token = await userService.logIn(email, password);
    return res.status(200).json({
      message: "Login success",
      access_token: token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { logIn };
