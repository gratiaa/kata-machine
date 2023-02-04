type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = {
            value: item,
        } as Node<T>;

        if (this.head) {
            const currentHeadNode = this.head;
            newNode.prev = currentHeadNode;
        }

        this.head = newNode;
        this.length++;
    }
    pop(): T | undefined {
        if (this.head) {
            const currentHeadNode = this.head;
            this.head = currentHeadNode.prev;
            this.length--;
            return currentHeadNode.value;
        }

        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
