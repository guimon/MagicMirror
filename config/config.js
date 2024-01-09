/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_right",
                        classes: "scene1 scene2 scene3",
                        config: {
                                dateFormat: "ddd, DD MMM"
                        }
		},
		{
			module: "calendar",
			header: "Schedule",
			position: "top_left",
                        classes: "scene1 scene2 scene3",
			config: {
                                maximumNumberOfDays: 1,
                                timeFormat: 'relative',
                                wrapEvents: true,
                                maxTitleLength: 18,
                                fade: false,
                                getRelative: 1,
                                nextDaysRelative: true,
                                broadcastPastEvents: false,
                                hideOngoing: true,
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
                                                url: "https://calendar.google.com/calendar/ical/gui%40partnerelement.com/private-074baafd028273339a245886b86720e2/basic.ics"
					},
                                        {
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                symbol: "calendar-minus",
                                                url: "https://calendar.google.com/calendar/ical/guilherme%40konkix.com/private-2f527c97ca87026fabdc1f578ffee732/basic.ics"
                                        },
				]
			}
		},
                {
  			module: "MMM-Scenes",
  			position: 'bottom_right', // Position of indicator
  			classes: "", // Even indicator needs the direction when it is presented.
  			hiddenOnStartup: true,
  			config: {
    				scenario: [ "scene1", "scene2", "scene3", "scene4"],
  			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
