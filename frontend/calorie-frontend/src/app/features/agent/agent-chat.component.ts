import { AsyncPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AgentToolExecution } from '../../core/models/agent.models';
import { selectIsAuthenticated } from '../../store/auth/auth.selectors';
import { AgentChatStore } from './agent-chat.store';

@Component({
  selector: 'app-agent-chat',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './agent-chat.component.html',
  styleUrl: './agent-chat.component.scss',
})
export class AgentChatComponent {
  private readonly store = inject(Store);
  readonly chatStore = inject(AgentChatStore);

  readonly isAuthenticated$ = this.store.select(selectIsAuthenticated);

  readonly draft = signal('');

  @ViewChild('messagesContainer')
  private messagesContainer?: ElementRef<HTMLElement>;

  constructor() {
    effect(() => {
      this.chatStore.messages();
      this.chatStore.loading();
      this.scrollToBottom();
    });
  }

  toggleChat(): void {
    this.chatStore.toggle();
  }

  sendMessage(): void {
    const text = this.draft().trim();
    if (!text) {
      return;
    }

    this.chatStore.send(text);
    this.draft.set('');
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  toolLabel(tool: AgentToolExecution): string {
    const labels: Record<string, string> = {
      addLogItem: 'הוספה לסל',
      removeLogItem: 'הסרה מהסל',
      createProduct: 'יצירת מוצר',
      deleteProduct: 'מחיקת מוצר',
      updateProduct: 'עדכון מוצר',
      searchProducts: 'חיפוש מוצרים',
      getMyProducts: 'שליפת מוצרים',
    };

    return labels[tool.name] ?? tool.name;
  }

  private scrollToBottom(): void {
    queueMicrotask(() => {
      const element = this.messagesContainer?.nativeElement;
      if (!element) {
        return;
      }

      element.scrollTop = element.scrollHeight;
    });
  }
}
