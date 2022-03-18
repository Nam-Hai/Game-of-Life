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

    getAlive() {
        return this.alive;
    }

    changeStatue() {
        this.alive = !this.alive;
        this.dom.classList.toggle('alive');
    }

    die() {
        if (this.alive) this.dom.classList.toggle('alive');
        this.alive = false;
    }

    live() {
        if (!this.alive) this.dom.classList.toggle('alive');
        this.alive = true;
    }

}