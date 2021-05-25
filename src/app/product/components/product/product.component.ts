import {
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange,
    OnInit, 
    DoCheck, 
    OnDestroy
} from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck{
    @Input() product: Product;
    // En caso de no tener strictPropertyInitialization en tsconfig.json
    // @Input() product!: Product; 

    // @Output() productClicked: EventEmitter <any> = new EventEmitter();
    @Output() productClicked = new EventEmitter<any>();

    today = new Date();

    constructor(){
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChange):void {
    //     console.log('2. ngOnChages');
    //     console.log(changes);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    ngDestroy(){
        console.log('5. ngDestroy');

    }

    addCart(){
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}   
    
