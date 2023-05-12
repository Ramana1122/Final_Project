import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminfilter'
})
export class AdminfilterPipe implements PipeTransform {

  transform(productlist: any, type: string): any {
    if(type=="All")
       return productlist;

    return productlist.filter((x:any)=>x.type == type)
  }

}
