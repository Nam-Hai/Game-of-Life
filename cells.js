class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.alive = false;
        this.dom = N.Cr('div');
        this.dom.classList.add('cell');

        N.BM(this, ['changeStatue'])
        this.dom.addEventListener('click', this.changeStatue);
    }


    changeStatue() {
        this.alive = !this.alive;
        this.dom.classList.toggle('alive');
    }
}