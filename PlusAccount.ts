import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number) : any => {
        if(this.validateStatus()){
           let deposit = value + 10
            let balance:number = this.getBalance()
            console.log('Seu saldo é', balance)
            balance = balance + deposit
        console.log('Você depositou', value, 'e ganhou', deposit-value, 'de bônus e agora seu saldo é', balance)
        }

    }
}