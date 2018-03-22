/**
 * utils/tools.js
 * Tools that can be used throughout the app.
 */

var os = require('os');
var requestExternal = require('./utils/request-external');

var ifaces = os.networkInterfaces();

module.exports = {
  /**
   * getIpAddress
   * @param {void}
   * @return {string}
   * @see https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
   *
   * Example responses
   * en0 192.168.1.101
   * eth0 10.0.0.101
   */
  getIpAddress: function () {
    Object.keys(ifaces).forEach(function (ifname) {
      var alias = 0;
      ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }
        if (alias >= 1) {
          // this single interface has multiple ipv4 addresses
          console.log(ifname + ':' + alias, iface.address);
        } else {
          // this interface has only one ipv4 adress
          console.log(ifname, iface.address);
        }
        ++alias;
      });
    });
  },

  /**
   * locationLookup
   * Handles looking up the location the user is currently in.
   * @param {function} callback
   * @return {object}
   * Example response
   * {
   *    "ip": "8.8.8.8",
   *    "hostname": "google-public-dns-a.google.com",
   *    "loc": "37.385999999999996,-122.0838",
   *    "org": "AS15169 Google Inc.",
   *    "city": "Mountain View",
   *    "region": "California",
   *    "country": "US",
   *    "phone": 650
   *  }
   */
  locationLookup: function() {
    return requestExternal
            .get('https://ipinfo.io')
            .then(function(res) {
              callback(res.data);
            })
            .catch(function(err) {
              if(err instanceof Error) {
                console.log(err.message);
              } else {
                console.log(err.data);
              }
            });
  };
}
