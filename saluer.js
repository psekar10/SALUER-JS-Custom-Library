;(function(global, $){
	// saluer object which returns a saluer init
	var saluer = function(firstName, lastName, language){
		return new saluer.init(firstName, lastName, language);
	}
	// supported languages
	/**
	en => English
	fr => French
	es => Spannish
	ar => Arabic
	de => German
	ru => Russian
	**/
	var supportLanguages = ['en', 'fr', 'es', 'ar', 'de', 'ru'];
	// informal greeting obj
	var greetings = {
		en : 'Hello',
		fr : 'Bonjour',
		es : 'Hola',
		ar : 'marhabaan',
		de : 'Hallo',
		ru : 'privet'
	}
	// formal greeting obj
	var formalGreetings = {
		en : 'Greetings',
		fr : 'Salut',
		es : 'saludos',
		ar : 'tahiat',
		de : 'Hallo',
		ru : 'privet'
	}
	var logMessages = {
		en : 'Logged in',
		fr : 'incio'
	}
	// The prototype methods are given below
	saluer.prototype = {
		fullName : function() {
			return this.firstName + ' ' + this.lastName;
		},
		validate: function() {
			if (supportLanguages.indexOf(this.language) === -1 ) {
				throw "Invalid language";
			}
		},
		greeting : function(){
			return greetings[this.language] + ' ' + this.firstName;
		},
		formalGreetings : function(){
			return formalGreetings[this.language] + ' ' + this.fullName();
		},
		greet: function(formal) {
			var msg;
			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greeting();
			}
			if (console) {
				console.log(msg);
			}

			return this;
		},
		log: function() {
			if(console) {
				console.log(logMessages[this.language] + ' ' + this.fullName());
			}

			return this;
		},
		setLang: function(lang) {
			this.language = lang
			this.validate();

			return this;
		},
		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw "jQuery not loaded";
			}
			if (!selector) {
					throw "Missing Jquery selector";
			}
			var msg;
			if (formal) {
				msg = this.formalGreetings();

			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
		}
	};
	// saluer init where initialization occurs
	saluer.init = function(firstName, lastName, language){
		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en'
	}	
	// Appending methods from prototypes to init.prototypes
	saluer.init.prototype = saluer.prototype;

	global.saluer = global.S$ =saluer;

}(window, jQuery));