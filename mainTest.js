const items = document.querySelector('.items');
const input = document.querySelector('.wordInput');
const addBtn = document.querySelector('.addBtn');

function onAdd() {
    //1. User insert input
    const text = input.value;
    if (text === "") {
        return;
        input.focus();
    }
    //2. Create item element (itemlist + deleteBtn)
    const item = createItem(text);
    //3. Add item to appear on the container
    items.appendChild(item);
    //4. Refresh input after use insert
    input.value = "";
    input.focus();
    item.scrollIntoView();
}

let id = 0; // UUID
function createItem(text) {
    const itemList = document.createElement('li');
    itemList.setAttribute('class', 'item__list');
    itemList.setAttribute('data-id', id);
        itemList.innerHTML = `                
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="delete" data-id=${id}>
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button> 
            </div>
            <div class="divider"></div>
    `;
    id++;
    return itemList;
    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'delete');
    // deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemList);
    // });

    // const divider = document.createElement('div');
    // divider.setAttribute('class', 'divider');

    // item.appendChild(name);
    // item.appendChild(deleteBtn);

    // itemList.appendChild(item);
    // itemList.appendChild(divider);

}

addBtn.addEventListener('click', () => {
    onAdd();
});


input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__list[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
