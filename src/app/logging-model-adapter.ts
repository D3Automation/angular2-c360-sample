import { ModelAdapter, UIPart } from 'angular2-c360';

export class LoggingModelAdapter extends ModelAdapter {
    visitPart(part: UIPart) {
        console.log(part.refChain);
    }    
}