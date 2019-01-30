var snmp = require("net-snmp");
// Default options
var options = {
  port: 161,
  retries: 1,
  timeout: 5000,
  transport: "udp4",
  trapPort: 162,
  version: snmp.Version2c, //snmp.Version2c
  idBitsSize: 16
};
var session = snmp.createSession("192.168.0.93", "public", options);

var oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.5.0"];

session.get(oids, function(error, varbinds) {
  if (error) {
    console.error(error);
  } else {
    for (var i = 0; i < varbinds.length; i++)
      if (snmp.isVarbindError(varbinds[i]))
        console.error(snmp.varbindError(varbinds[i]));
      else console.log(varbinds[i].oid + " = " + varbinds[i].value);
  }

  // If done, close the session
  session.close();
});

session.trap(snmp.TrapType.LinkDown, function(error) {
  if (error) console.error(error);
});
//};
