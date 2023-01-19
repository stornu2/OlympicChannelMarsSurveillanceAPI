/**
 * * Clase Attributes: encargada de manejar todos los parametros utilizados en la sessión.
 */
module.exports = class Attributes {
    constructor() {
        this.session = new Session();
    }
    clear() {
        this.session = new Session();
    }
    init(values) {
        this.session = new Session().init(values.session);
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * * Clase Session: encargada de manejar los datos de la sesión.
 */
class Session {
    constructor() {
        this.evaFirstTime = false;
        this.evaAccessToken = '';
        this.evaSessionCode = '';
        this.evaSessionMode = '';
        this.evaBrokerResponse = '';
        this.inputTranscriptFromNLP = '';
        this.whatsappPhoneNumber = '';
        this.whatsappTTL = '';
    }
    clear() {
        this.evaFirstTime = false;
        this.evaAccessToken = '';
        this.evaSessionCode = '';
        this.evaSessionMode = '';
        this.evaBrokerResponse = '';
        this.inputTranscriptFromNLP = '';
        this.whatsappPhoneNumber = '';
        this.whatsappTTL = '';
    }
    init(values) {
        this.evaFirstTime = values.evaFirstTime;
        this.evaAccessToken = values.evaAccessToken;
        this.evaSessionCode = values.evaSessionCode;
        this.evaSessionMode = values.evaSessionMode;
        this.evaBrokerResponse = values.evaBrokerResponse;
        this.inputTranscriptFromNLP = values.inputTranscriptFromNLP;
        this.whatsappPhoneNumber = values.whatsappPhoneNumber;
        this.whatsappTTL = values.whatsappTTL;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}
