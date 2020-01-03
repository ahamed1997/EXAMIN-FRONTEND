export class Paymentmode {
    paymentMode: string;
    cardHolderName: string;
    cardnumber: string;
    cvv: string;
    expiration: Date;
    expirations:Date;
    constructor(paymentMode?, ecardHolderName?, ecardNumber?, ecvv?, eexpiration?,eexpirations?) {
        this.paymentMode = paymentMode;
        this.cardHolderName = ecardHolderName;
        this.cardnumber = ecardNumber;
        this.cvv = ecvv;
        this.expiration = eexpiration;
        this.expirations= eexpirations;
    }

}