import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getInitials',
  standalone: true
})
export class GetInitialsPipe implements PipeTransform {

  transform(name: string): string {
    return name.split(' ').length > 1 ? name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0) : name.split(' ')[0].charAt(0)
  }

}
