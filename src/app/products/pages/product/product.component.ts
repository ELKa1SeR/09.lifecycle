import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 0 ;

  constructor(){
    console.log('Constructor')
  }


  ngAfterContentInit(): void {
console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
console.log('ngAfterContentChecked ')
  }
  ngAfterViewInit(): void {
console.log(' ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
console.log('ngAfterViewChecked ')
  }
  ngOnDestroy(): void {
console.log('ngOnDestroy ')
  }
  ngDoCheck(): void {
console.log(' ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
console.log(' ngOnChanges')
  }
  ngOnInit(): void {
console.log(' ngOnInit')
  }

  increasePrice(){
    this.currentPrice++;
  }


}
