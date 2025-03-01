import { IDomainEvent } from 'src/common/interfaces';

export abstract class AggregateRoot {
  #events: IDomainEvent[] = [];
  public id: number;
  public version: number = 0;

  public get events(): ReadonlyArray<IDomainEvent> {
    return this.#events;
  }

  protected addEvent(event: IDomainEvent) {
    if (!this.events.length) {
      this.version++;
    }

    this.#events.push(event);
  }

  public clearEvents() {
    this.#events.length = 0;
  }
}
