import{ReferenceItem} from './classes';

export default class Encylopedia extends ReferenceItem{

    edition:Number;

    printItem():void{
        super.printItem();
        console.log(`${this.edition} is the edition.`);
    }
}