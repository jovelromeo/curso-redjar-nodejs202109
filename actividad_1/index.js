const util = require('util')

const log = (data) => console.log(util.inspect(data, {showHidden: false, depth: Infinity, colors: true}))

// Returns UUIDV4 string
const uuidv4 = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });


const ItemTypes = {
    Consumable: 0,
    Resource: 1,
    Weapon: 2,
    Armor: 3,
    Unset: 4,
}
// Practica operador ||
// Usar operador || para tomar valores por defecto
// Ej: { valor: someVariable || "valor por defecto"}
const createItem = ({gid, name, description, type, uid} = {}) => {
    return {
        uid, // por defecto deberia ser uuidv4()
        gid, // por defecto deberia ser 0
        name, // por defecto string vacio
        description, // por defecto null
        type, // por defecto ItemTypes Unset
    }
}

const calculateStackSize = (item) => {
    switch(item?.type){
        case ItemTypes.Consumable:
            return 16;
        case ItemTypes.Resource:
            return 999;
        case ItemTypes.Weapon:
        case ItemTypes.Armor:
            return 1;
    }
    return 0;
}

// Practica arrays
// Practica method find in array
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const findEmptySlot = (slots) => {
    //slots is an array that contains slot objects
    // {item, quantity, stackSize}
    // find first elements that matchs slot empty condition
    // an slot is empty if item is null
    return null;
}

// Practica method find in array
const findStackableSlotForItem = (slots, item) => {
    //slots is an array that contains slot objects
    // {item, quantity, stackSize}
    // find first elements that matchs slot stackable condition
    // an slot is stackable if item is not null
    // and item.gid equals slot.item.gid
    // and slot is not full (slot.quantity < slot.stackSize)
    return null
}

// Necesitamos buscar items en los slots que contengan el gid
// Hint: podemos usar array filter
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// slots puede o no tener item, se debe validar
const findItemsByGID = (slots, gid) => {
    //slots is an array that contains slot objects
    // {item, quantity, stackSize}
    // item contains {gid: number}
    return []
}

const calculateSlotQuantityAndRest = (slotQ, stackSize, quantity) => {
    const newQuantity = slotQ + quantity
    //sobrante si la cantidad total es mayor al stack size
    const rest = newQuantity - stackSize
    // Si sobran items (es decir no entran en el stack fijo) (rest > 0)
    // newQ es el stack size, caso contrario es la nueva cantidad
    // Practica operador ternario
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // Resolver con una ternaria a ? b : c
    const newQ = 0
    return {
        quantity: newQ,
        rest
    }
}

const addItem = (inventory, item, quantity) => {
    let slot = null;
 
    slot = findStackableSlotForItem(inventory.slots, item);
 
    if(!slot){
        slot = findEmptySlot(inventory.slots)
    }
    // Inventory full
    if (!slot) return;

    // Practica optional chaining
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Reemplazar expresion con operador optional chaining
    if(slot && slot.item && slot.item.gid === item.gid){
        const res = calculateSlotQuantityAndRest(slot.quantity, slot.stackSize, quantity)
        slot.quantity = res.quantity
        if (res.rest > 0){
            addItem(inventory, item, res.rest)
        }else{
            slot.item.uid = item.uid;
        }
    }else{
        slot.quantity = quantity
        slot.stackSize = calculateStackSize(item)
        slot.item = item;
        inventory.items.push(slot)
    }
}

 // Nothing to do here :)
const createInventory = () => {
    const slots = [];
    for(let i=0;i<12;i++){
        const slot = {
            stackSize: 0,
            item: null,
            quantity: 0,
        }
        slots.push(slot);
    }
    const items = [];
    return {
        slots,
        items,
    }
}



module.exports = {
    createItem,
    ItemTypes,
    createInventory,
    addItem,
    uuidv4,
    findEmptySlot,
    findStackableSlotForItem,
    findItemsByGID,
    calculateSlotQuantityAndRest
}
