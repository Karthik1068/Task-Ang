export class NewTransaction {
newTransactionInfo: NewTransactionInfo = {

        reference: '',
        custermerInfo: {
            customerNumber: '',
            customerName: '',
            address: '',
            phone: 0
        },
        transferAmount: 0,
        transferCurrency: '',
        beneficiaryBank: '',
        beneficiaryAcno: '',
        paymentDetails: ''
    }
}

interface NewTransactionInfo {
    reference: string,
    custermerInfo: {
        customerNumber: string,
        customerName: string,
        address: string,
        phone: number
    },
    transferAmount: number,
    transferCurrency: string,
    beneficiaryBank: string,
    beneficiaryAcno: string,
    paymentDetails: string
}