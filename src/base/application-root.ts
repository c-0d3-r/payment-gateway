import { AggregateRootId } from "./types/aggregate-root-id.type";
import { IDomainEvent } from "./types/domain-event.type";

export abstract class ApplicationRoot {
    public id: AggregateRootId;

    #events: Set<IDomainEvent> = new Set<IDomainEvent>();

    public version: number = 0;

    public addEvent(event: IDomainEvent): void {
        if (this.#events.size === 0) {
            this.version++;
        }

        this.#events.add(event);
    }

    public getEvents(): Set<IDomainEvent> {
        return this.#events;
    }

    public clearEvents(): void {
        this.#events.clear();
    }
}
