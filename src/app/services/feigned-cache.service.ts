import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeignedCacheService {

  languages?: any
  srcInput: string = 'en_US'
  targetInput: string = 'yo_NG'
  dataInput: string = ''
  result?: string

  constructor() { }
}
