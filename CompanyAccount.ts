import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    getLoan = (loan: number): any => {
        if(this.validateStatus()){
        let balance = this.getBalance()
        balance += loan 
        console.log('Você pegou um empréstimo de', loan,'Agora seu saldo é', balance)
        return loan
    }
}
}
