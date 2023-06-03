exports.SignalError = class SignalError extends Error {};

exports.UntrustedIdentityKeyError = class UntrustedIdentityKeyError extends exports.SignalError {
    constructor(addr, identityKey) {
        super();
        this.name = 'UntrustedIdentityKeyError';
        this.addr = addr;
        this.identityKey = identityKey;
    }
};

exports.SessionError = class SessionError extends exports.SignalError {
    constructor(message) {
        super(message);
        this.name = 'SessionError';
        Object.setPrototypeOf(this, SessionError.prototype); 
    }
};

exports.MessageCounterError = class MessageCounterError extends exports.SessionError {
    constructor(message) {
        super(message);
        this.name = 'MessageCounterError';
        Object.setPrototypeOf(this, MessageCounterError.prototype); 
    }
};

exports.PreKeyError = class PreKeyError extends exports.SessionError {
    constructor(message) {
        super(message);
        this.name = 'PreKeyError';
        Object.setPrototypeOf(this, PreKeyError.prototype); 
    }
};

