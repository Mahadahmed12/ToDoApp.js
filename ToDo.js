function add(id) {
    var text =document.querySelector(`#item_${id}>input`) ||  document.querySelector("#input1");
    var list = document.querySelector("#listdiv");
    const div = document.querySelector(`#item_${id}`) || document.createElement('div');
    div.id = `item_${id || (list.children.length + 1)}`;
    div.className = "addDiv"
    div.innerHTML="";
    const html1 = `
    <span class = "span">${id || (list.children.length + 1)}.</span>
    <p class="listinput">${text.value }</p>
    <button onclick = "edit(${id || (list.children.length + 1)})" class="editbutton">Edit</button>
    <button onclick = "del(${id || (list.children.length + 1)})" class="Deletebutton">Delete</button>`
    div.innerHTML = html1;
    if(!id) {
        list.appendChild(div);
    }
}

function edit(id) {
    const div = document.querySelector(`#item_${id}`);
    const text = document.querySelector(`#item_${id}>p`).innerHTML;
    div.innerHTML = "";
    const html1 = `<input id="listinput" value="${text}"/>
    <button onclick = "add(${id})" class="savebutton">Save</button>
    <button onclick = "cancel(${id})" class="cancelbutton">Cancel</button>`
    div.innerHTML = html1;
}

function del(id) {
    var d = document.querySelector(`#item_${id}`); 
    d.parentNode.removeChild(d)

}

function cancel(id){
    
    add(id);
}

