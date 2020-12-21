"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _index = _interopRequireDefault(require("../pages/index/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', async (req, res) => {
  const reactComponent = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  res.status(200).render('pages/index/index', {
    reactApp: reactComponent
  });
});
var _default = router;
exports.default = _default;