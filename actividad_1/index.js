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
/** ACTIVIDAD  */
    // Usar operador || para tomar valores por defecto
    // Ej: { valor: 1 || "valor por defecto"}
const createItem = ({gid, name, description, type, uid} = {}) => {
    return {
        uid, // por defecto deberia ser uuidv4
        gid, // por defecto deberia ser 0
        name, // por defecto string vacio
        description, // por defecto null
        type // por defecto ItemTypes Unset
    }
}

const createItemStack = (item, quantity) => {
    return {
        item, // por defecto null
        quantity, // por defecto 0
        uid: item?.uid, // por defecto null
        stackSize: calculateStackSize(item)
    }
}
/** FIN ACTIVIDAD  */

const findEmptySlot = (inventory) => {
    for(let slot of inventory.slots){
        if(!slot.itemStack || !slot.itemStack.item){
            return slot;
        }
    }
    return null;
}

/** ACTIVIDAD  */
const addItem = (inventory, item, quantity, slotId) => {
    const slot = inventory.slotsMap[slotId];
    // Resolver con operador ?
    // ejemplo a?.prop?.prop2
    if(slot.itemStack && slot.itemStack.item.gid === item.gid){
        const newQuantity = slot.itemStack.quantity + quantity
        const stackSize = slot.itemStack.stackSize
        // sobrante si la cantidad total es mayor al stack size
        const rest = newQuantity - stackSize
        // Si sobran items (es decir no entran en el stack fijo) (rest > 0)
        // itemStack.quantity es el stack size, caso contrario es la nueva cantidad
        // TODO: resolver la linea de abajo con una ternaria a ? b : c
        slot.itemStack.quantity = 0 
        if (rest > 0){
            const emptySlot = findEmptySlot(inventory);
            if(emptySlot){
                emptySlot.itemStack = createItemStack(item, quantity);
                inventory.items.push(emptySlot.itemStack)
            }
        }else{
            slot.itemStack.item = item;
            slot.itemStack.uid = item.uid;
        }
    }else{
        slot.itemStack = createItemStack(item, quantity)
        inventory.items.push(slot.itemStack)
    }
}
/** FIN ACTIVIDAD  */

const createSlot = (id, itemStack) => {
    return {
        id,
        itemStack
    }
}

const createInventory = () => {
    const slots = [];
    const slotsMap = {};
    for(let i=0;i<12;i++){
        const slot = createSlot(i)
        slotsMap[i] = slot;
        slots.push(slot);
    }
    const items = [];
    return {
        slots,
        slotsMap,
        items,
    }
}

const inventory = createInventory();
const armorCuero = createItem({
        uid: uuidv4(), 
        gid: 0,
        name: "Camisa de cuero",
        description: "No defiende un carajo",
        type: ItemTypes.Armor
    })

const resourceWood = createItem({
        uid:uuidv4(),
        gid:1,
        name:"Tabla de madera",
        description:"La madera es el recurso mas raro del universo",
        type: ItemTypes.Resource,
    })


addItem(inventory, resourceWood, 10, 5)
addItem(inventory, armorCuero, 1, 1)
log(inventory)



module.exports = {
    createItem,
    createItemStack,
    ItemTypes,
    createInventory,
    addItem,
    uuidv4
}
