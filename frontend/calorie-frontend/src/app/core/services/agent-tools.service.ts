import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { AgentToolExecution } from '../models/agent.models';
import { LogsActions } from '../../store/logs/logs.actions';

type ToolHandler = (tool: AgentToolExecution) => void;

@Injectable({ providedIn: 'root' })
export class AgentToolsService {
  private readonly store = inject(Store);

  /** Emits when product-related tools run so product pages can refresh. */
  readonly productsChanged$ = new Subject<void>();

  private readonly handlers = new Map<string, ToolHandler>([
    ['addLogItem', () => this.refreshTodayLog()],
    ['removeLogItem', () => this.refreshTodayLog()],
    ['createProduct', () => this.notifyProductsChanged()],
    ['deleteProduct', () => this.notifyProductsChanged()],
    ['updateProduct', () => this.notifyProductsChanged()],
  ]);

  applyToolExecutions(tools: AgentToolExecution[] | undefined): void {
    if (!tools?.length) {
      return;
    }

    const handled = new Set<string>();

    for (const tool of tools) {
      if (tool.status !== 'success') {
        continue;
      }

      const handler = this.handlers.get(tool.name);
      if (!handler || handled.has(tool.name)) {
        continue;
      }

      handler(tool);
      handled.add(tool.name);
    }
  }

  private refreshTodayLog(): void {
    this.store.dispatch(LogsActions.loadToday());
  }

  private notifyProductsChanged(): void {
    this.productsChanged$.next();
  }
}
