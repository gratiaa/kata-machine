type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = {
            value: item,
        };

        if (this.tail) {
            const tail = this.tail;
            tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }

        this.length++;
    }
    deque(): T | undefined {
        const firstNode = this.head;

        if (!firstNode) {
            return undefined;
        }

        if (this.head === this.tail) {
            this.head = this.tail = undefined;
        } else {
            this.head = firstNode.next;
        }

        this.length--;

        return firstNode.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
