const MAIN_URL = 'http://18.184.34.214:3000/api';

const SIGNUP = `${MAIN_URL}/signup`;
const SIGNIN = `${MAIN_URL}/login`;
const LOGOUT = `${MAIN_URL}/logout`;

const CONFIRMATION = `${MAIN_URL}/confirm`;
const CONFIRM_TERMS = `${CONFIRMATION}/terms`;
const CONFIRM_USERNAME = `${CONFIRMATION}/username`;
const CONFIRM_PHONE = `${CONFIRMATION}/phone`;
const CONFIRM_EMAIL = `${CONFIRMATION}/email`;
const CONFIRM_ETHERIUM = `${CONFIRMATION}/ethereum`;

const GAME = `${MAIN_URL}/game`;
const GAME_CREATE = `${GAME}/create`;
const GAME_JOIN = `${GAME}/join`;
const GAME_LEAVE = `${GAME}/leave`;
const GAME_GET = `${GAME}/get`;

const GAMES_GET = `${MAIN_URL}/games/get`;

export default {
  url: MAIN_URL,
  auth: {
    signin: SIGNIN,
    signup: SIGNUP,
    logout: LOGOUT,
    confirm: {
      terms: CONFIRM_TERMS,
      username: CONFIRM_USERNAME,
      phone: CONFIRM_PHONE,
      email: CONFIRM_EMAIL,
      ethereum: CONFIRM_ETHERIUM
    }
  },
  game: {
    create: GAME_CREATE,
    join: GAME_JOIN,
    leave: GAME_LEAVE,
    get: GAME_GET
  },
  games: GAMES_GET
};
