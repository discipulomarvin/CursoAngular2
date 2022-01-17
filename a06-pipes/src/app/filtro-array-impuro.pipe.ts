import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro'
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  override transform(value: any, args?: any): any {
    return null;
  }

}
