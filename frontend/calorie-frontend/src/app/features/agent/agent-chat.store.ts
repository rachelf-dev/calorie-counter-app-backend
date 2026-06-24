import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';

import {
  AgentChatHistoryItem,
  ChatMessage,
} from '../../core/models/agent.models';
import { AgentService } from '../../core/services/agent.service';
import { AgentToolsService } from '../../core/services/agent-tools.service';

@Injectable({ providedIn: 'root' })
export class AgentChatStore {
  private readonly agentService = inject(AgentService);
  private readonly agentToolsService = inject(AgentToolsService);

  readonly messages = signal<ChatMessage[]>([]);
  readonly loading = signal(false);
  readonly isOpen = signal(false);

  readonly hasMessages = computed(() => this.messages().length > 0);

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  clear(): void {
    this.messages.set([]);
  }

  send(text: string): void {
    const trimmed = text.trim();
    if (!trimmed || this.loading()) {
      return;
    }

    const history = this.buildHistory(this.messages());

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    this.messages.update((messages) => [...messages, userMessage]);
    this.loading.set(true);

    this.agentService
      .sendMessage({ message: trimmed, history })
      .pipe(
        catchError((error) => {
          const errorMessage =
            error?.error?.message ?? 'שגיאה בשליחת ההודעה. נסה שוב.';

          this.messages.update((messages) => [
            ...messages,
            {
              id: crypto.randomUUID(),
              role: 'agent',
              content: errorMessage,
              timestamp: new Date(),
              status: 'error',
            },
          ]);

          return of(null);
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe((response) => {
        if (!response) {
          return;
        }

        this.messages.update((messages) => [
          ...messages,
          {
            id: crypto.randomUUID(),
            role: 'agent',
            content: response.reply,
            timestamp: new Date(),
            toolsUsed: response.toolsUsed,
          },
        ]);

        this.agentToolsService.applyToolExecutions(response.toolsUsed);
      });
  }

  private buildHistory(messages: ChatMessage[]): AgentChatHistoryItem[] {
    return messages
      .filter((message) => !message.status)
      .map(({ role, content }) => ({ role, content }));
  }
}
