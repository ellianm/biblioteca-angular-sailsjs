import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceResolver {

  constructor(private messageService: MessageService) { }


  success(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: message });
  }
  warning(message: string) {
    this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: message });
  }
  error(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: message });
  }
  confirm(title, message: string) {
    this.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: title, detail: message });
  }
  clear() {
    this.messageService.clear();
  }
}
