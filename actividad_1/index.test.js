const assert = require('assert');
const { createItem, createItemStack, uuidv4, ItemTypes, createInventory, addItem } = require('.');

describe('Validar actividad', function() {
    it('should create default item', function() {
        const defaultItem = createItem()
        assert.strictEqual(defaultItem.gid, 0)
        assert.notStrictEqual(defaultItem.uid, undefined)
        assert.strictEqual(defaultItem.name, "")
        assert.strictEqual(defaultItem.description, null)
        assert.strictEqual(defaultItem.type, ItemTypes.Unset)
    });
    it('should create default ItemStack', function() {
        const defaultItemStack = createItemStack()
        assert.strictEqual(defaultItemStack.item, null)
        assert.strictEqual(defaultItemStack.quantity, 0)
        assert.strictEqual(defaultItemStack.uid, null)
        assert.strictEqual(defaultItemStack.stackSize, 0)
    });

    it('should create item', function() {
        const testItem = {
            uid: uuidv4(), 
            gid: 0,
            name: "Stackable item",
            description: "A stackable item",
            type: ItemTypes.Resource
        }
        const item = createItem(testItem)
        assert.deepEqual(item, testItem)
    });

    it('should create item without uid', function() {
        const testItem = {
            gid: 0,
            name: "Stackable item",
            description: "A stackable item",
            type: ItemTypes.Resource
        }
        const item = createItem(testItem)
        assert.notEqual(item.uid, undefined)
        testItem.uid = item.uid;
        assert.deepEqual(item, testItem)
    });

    it('should validate inventory', function() {
        const itemStackable = createItem({
            uid: uuidv4(), 
            gid: 0,
            name: "Stackable item",
            description: "A stackable item",
            type: ItemTypes.Resource
        })
    
        const itemStackable2 = createItem({
            uid: uuidv4(), 
            gid: 0,
            name: "Stackable item",
            description: "A stackable item",
            type: ItemTypes.Resource
        })
    
        const itemNonStackable = createItem({
            uid: uuidv4(), 
            gid: 0,
            name: "Non Stackable item",
            description: "A non stackable item",
            type: ItemTypes.Armor
        })
    
        const itemNonStackable2 = createItem({
            uid: uuidv4(), 
            gid: 0,
            name: "Non Stackable item",
            description: "A non stackable item",
            type: ItemTypes.Armor
        })
        const inventory = createInventory();
        addItem(inventory, itemStackable, 5, 0)
        addItem(inventory, itemStackable2, 2, 0)
        addItem(inventory, itemNonStackable, 1, 1)
        addItem(inventory, itemNonStackable2, 1, 1)

        assert.strictEqual(inventory.items.length, 3)
        assert.deepEqual(inventory.items[0].item, itemStackable2)
        assert.strictEqual(inventory.items[0].quantity, 7)

        assert.deepEqual(inventory.items[1].item, itemNonStackable)
        assert.strictEqual(inventory.items[1].quantity, 1)
        
        assert.deepEqual(inventory.items[2].item, itemNonStackable2)
        assert.strictEqual(inventory.items[2].quantity, 1)
        
    });

});