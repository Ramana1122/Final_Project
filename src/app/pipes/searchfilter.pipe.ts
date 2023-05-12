import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: any, type: string): any {
    if (type == 'All') 
    return products;

    return products.filter((x: any) => x.Category == type);
  }

}
