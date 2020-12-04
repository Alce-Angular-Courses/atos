export class Libro {
    constructor(
        public id: string | number = '',
        public titulo: string = '',
        public autores: string | Array<string> = ''
    ) {}
}
