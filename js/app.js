var buzzerON = false;

var buzzerButton = function()
{
  buzzerON = !buzzerON;
  if (buzzerON) {
   $("#buzzer-button-text").html("OFF");
   buzzer._writeCharacteristic(buzzer.buzzerUUID, new Uint8Array([1]))
   .then(() => console.log('wrote 1'))
   .catch(error => {console.log('write error');
   });
  }
  else {
    $("#buzzer-button-text").html("ON");
    buzzer._writeCharacteristic(buzzer.buzzerUUID, new Uint8Array([0]))
   .then(() => console.log('wrote 0'))
   .catch(error => {console.log('write error');
   });
  }
  console.log(buzzerON);
};

/**
  * The Web Bluetooth API specifies that a user action like a click is needed to
  * initiate a connection.
  */
function bleConnect() {
  buzzer.connect()
      .then(() => console.log('connected'))
      .catch(error => { console.log('connect error!'); });
};


