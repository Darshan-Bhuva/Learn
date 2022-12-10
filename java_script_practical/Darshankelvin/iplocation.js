function getIPAddressAndLocation() {
    // Use the fetch API to get the user's IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        // Use the IP address to get the user's location
        fetch(`https://ipapi.co/${ip}/json/`)
          .then(response => response.json())
          .then(location => {
            // Log the user's location to the console
            console.log(location);
          });
      });
  }
getIPAddressAndLocation();  