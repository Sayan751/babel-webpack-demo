import { testObj } from './data';
import { bar } from './decorator';

@bar
export class MyElement {
    prop = testObj.one;

}