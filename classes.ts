import{Book,DamagedLogger,Librarian} from './interfaces';
 
class UniversityLib implements Librarian{
    department:string;
    name:string;
    assistCustomer(custName:string){
    console.log(this.name + ' Assisting ' + custName);
}

 }

 abstract class ReferenceItem{
    private _publisher:string;
    title:string;
    year:number;

    constructor(){
        console.log('Creating Reference Item');
    }

    printItem():void{
        console.log(`${this.title} was published in ${this.year}.`);
    }

    get publisher():string{
        return this._publisher.toUpperCase();
    }

    set publisher(newPub:string){
        this._publisher = newPub;
    }
 }


 export{UniversityLib,ReferenceItem};