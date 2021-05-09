const { StatusCodes, getReasonPhrase } = require('http-status-codes')

const { isMatch, getToken, getHashedPassword } = require('../utils/index')
const { findUserByPhone, createUser } = require('../services/user')

const { OK, CREATED, BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes

const login = async (req, res) => {
  const { phone, password } = req.body

  try {
    const user = await findUserByPhone(phone)

    if (!user) {
      return res
        .status(BAD_REQUEST)
        .send({ error: getReasonPhrase(BAD_REQUEST) })
    }

    if (!(await isMatch(password, user.password))) {
      return res
        .status(BAD_REQUEST)
        .send({ error: getReasonPhrase(BAD_REQUEST) })
    }

    res
      .status(OK)
      .json({ token: getToken(user) })
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: getReasonPhrase(INTERNAL_SERVER_ERROR) })
  }
}

const register = async (req, res) => {
  const { phone, password } = req.body

  try {
    if (await findUserByPhone(phone)) {
      return res
        .status(BAD_REQUEST)
        .send({ error: getReasonPhrase(BAD_REQUEST) })
    }

    const hashedPassword = await getHashedPassword(password)

    await createUser({
      phone,
      password: hashedPassword,
    })

    res
      .status(CREATED)
      .json({ message: getReasonPhrase(CREATED) })
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: getReasonPhrase(INTERNAL_SERVER_ERROR) })
  }
}

module.exports = {
  login,
  register,
}
