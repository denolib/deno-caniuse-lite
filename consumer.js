//const features = require('./data/features');
import features from "./data/features";
import lite from "./dist/unpacker";
//const lite = require('./dist/unpacker');

Object.keys(features).forEach(function (key) {
  const feat = features[key];
  console.log(key, lite.feature(feat));
});
