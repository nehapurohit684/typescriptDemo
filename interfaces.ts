import{Category} from './enum';

interface Book{
    id:Number;
    title:string;
    author:string;
    available:boolean;
    category:Category;
    markDamaged?:DamagedLogger;
}
//function interface
interface DamagedLogger{
    (reason:string):void;
}
interface Librarian{
    department:string;
    name:string;
    assistCustomer:(custName:string) =>void;
}
export{Book,DamagedLogger,Librarian};