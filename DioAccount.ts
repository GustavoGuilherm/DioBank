export abstract class DioAccount{
   private readonly name: string
    private readonly accountNumber: number
    private balance: number = 50
    private status: boolean = true


    constructor (name: string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }


    deposit = (deposit: number) : any =>{
        if(this.validateStatus()){
        console.log('Você depositou',deposit)
        this.balance = this.balance +deposit
    }
    }

    withdraw = (saque: number): void => {
        if(this.status && saque < this.balance){
            this.balance = this.balance - saque        
        console.log('Você sacou', saque, 'e seu saldo agora é',this.balance)
    }    
    else { 
            throw new Error ('Saldo Insufisciente')
        }
    }


    getBalance = (): any => {
        return this.balance
        console.log('Seu saldo é de:', this.balance)
    }

    validateStatus = (): boolean =>{
        if (this.status){
            return this.status
        }
        throw new Error ('Conta Inválida')
    }
}