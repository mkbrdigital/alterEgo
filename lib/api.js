"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGamercard = void 0;

var _config = _interopRequireDefault(require("../config"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const url = "https://xboxapi.com/v2/";

const fetchGamercard = async query => {
  const _ref = await _axios.default.get(`${url}/${_config.default}/gamercard`, {
    headers: {
      "user-key": _config.default,
      Accept: "application/json"
    }
  }),
        data = _ref.data;

  return data;
};

exports.fetchGamercard = fetchGamercard;