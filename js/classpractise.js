class   Proto{
    constructor(example){
        this.listElement = example;
        this.textlist = []
    }

    static createListItem(text){
        const li  = document.createElement('li');
        li.textContent = text;
        return li;
    }
    update (){
        while (this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }
        for(const text of this.textlist){
            this.listElement.appendChild(Proto.createListItem(text));
        }
    }

    add (text){
        this.textlist.push(text);
        this.update();
    }
    remove (index) {
        this.textlist.splice(index, 1);
        this.update();
    }
}