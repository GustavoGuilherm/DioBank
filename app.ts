//Dio Baking
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'



//Alterar valor do saldo conforme depósito
//const peopleAccount: PeopleAccount = new PeopleAccount(2,'Gustavo', 20)
//peopleAccount.getBalance()
//peopleAccount.deposit(10)
//peopleAccount.deposit(20)
//peopleAccount.getBalance()

//Apenas contas ativas e com saldo podem realizar saques
//peopleAccount.withdraw(20)
//peopleAccount.withdraw(500)

// Depósito com bonus de 10 para clientes plus
//const plusAccount: PlusAccount = new PlusAccount('Gustavo', 20)
//plusAccount.deposit(100)

// Acrescente valor do empréstimo ao saldo atual
const companyAccount: CompanyAccount = new CompanyAccount('Gustavo', 20)
companyAccount.deposit(500)
companyAccount.getLoan(1200)
companyAccount.deposit(200)
companyAccount.getLoan(1200)

// o empréstimo não está acumulando com o depósito e saque para calcular o saldo.
