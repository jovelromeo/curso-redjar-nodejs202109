const assert = require("assert");
const {
  createItem,
  uuidv4,
  ItemTypes,
  createInventory,
  addItem,
  findEmptySlot,
  findStackableSlotForItem,
  findItemsByGID,
  calculateSlotQuantityAndRest,
} = require(".");

describe("Validar actividad", function () {
  describe("Practica operador || para valores por defecto", function(){
    it("should create default item", function () {
      const defaultItem = createItem();
      assert.strictEqual(defaultItem.gid, 0);
      assert.notStrictEqual(defaultItem.uid, undefined);
      assert.strictEqual(defaultItem.name, "");
      assert.strictEqual(defaultItem.description, null);
      assert.strictEqual(defaultItem.type, ItemTypes.Unset);
    });
  
    it("should create item", function () {
      const testItem = {
        uid: uuidv4(),
        gid: 0,
        name: "Stackable item",
        description: "A stackable item",
        type: ItemTypes.Resource,
      };
      const item = createItem(testItem);
      assert.deepEqual(item, testItem);
    });

    it("should create item without uid", function () {
      const testItem = {
        gid: 0,
        name: "Stackable item",
        description: "A stackable item",
        type: ItemTypes.Resource,
      };
      const item = createItem(testItem);
      assert.notEqual(item.uid, undefined);
      testItem.uid = item.uid;
      assert.deepEqual(item, testItem);
    });
  })

  describe("Practica arrays", function(){
    it("should find empty slot", function () {
      const slots = [
        {
          item: {},
        },
        { item: {} },
        { item: null },
        { item: null },
      ];
      const slot = findEmptySlot(slots);
      assert.equal(slot, slots[2]);
    });
  
    it("should find stackable slot for item", function () {
      const item = {
        gid: 0,
      };
      const slots = [
        {
          item: {},
        },
        { item: {} },
        { item: null },
        { item: { gid: 0 }, quantity: 16, stackSize: 16 },
        { item: { gid: 0 }, quantity: 2, stackSize: 16 },
      ];
      const slot = findStackableSlotForItem(slots, item);
      assert.equal(slot, slots[4]);
    });
  
    it("should find items by gid", function () {
      const itemGID = 0;
      const slots = [
        {
          item: { gid: 1 },
        },
        { item: {} },
        { item: null },
        { item: { gid: 0 }, quantity: 16, stackSize: 16 },
        { item: { gid: 0 }, quantity: 2, stackSize: 16 },
        {},
      ];
      const items = findItemsByGID(slots, itemGID);
      assert.equal(items.length, 2);
      assert.deepEqual(items, [
        { item: { gid: 0 }, quantity: 16, stackSize: 16 },
        { item: { gid: 0 }, quantity: 2, stackSize: 16 },
      ]);
    });
  })
  describe("practica operador ternario", function(){
    it("should calculate slot new quantity and rest", function () {
      const quantity = 16;
      const slot = { item: { gid: 0 }, quantity: 12, stackSize: 16 }
      const result = calculateSlotQuantityAndRest(slot.quantity, slot.stackSize, quantity);
      
      assert.equal(result.quantity, 16);
      assert.equal(result.rest, 12);
  })
  })
  describe("Verificar que funcione todo y se cree el inventario correctamente", function(){
    it("should validate inventory", function () {
      const itemStackable = createItem({
        uid: uuidv4(),
        gid: 0,
        name: "Stackable item",
        description: "A stackable item",
        type: ItemTypes.Resource,
      });
  
      const itemStackable2 = createItem({
        uid: uuidv4(),
        gid: 0,
        name: "Stackable item",
        description: "A stackable item",
        type: ItemTypes.Resource,
      });
  
      const itemNonStackable = createItem({
        uid: uuidv4(),
        gid: 1,
        name: "Non Stackable item",
        description: "A non stackable item",
        type: ItemTypes.Armor,
      });
  
      const itemNonStackable2 = createItem({
        uid: uuidv4(),
        gid: 1,
        name: "Non Stackable item",
        description: "A non stackable item",
        type: ItemTypes.Armor,
      });
      const inventory = createInventory();
      addItem(inventory, itemStackable, 5);
      addItem(inventory, itemStackable2, 2);
      addItem(inventory, itemNonStackable, 1);
      addItem(inventory, itemNonStackable2, 1);
         
      assert.deepEqual(inventory.slots[0].item, itemStackable2);
      assert.strictEqual(inventory.slots[0].quantity, 7);
  
      assert.deepEqual(inventory.slots[1].item, itemNonStackable);
      assert.strictEqual(inventory.slots[1].quantity, 1);
  
      assert.deepEqual(inventory.slots[2].item, itemNonStackable2);
      assert.strictEqual(inventory.slots[2].quantity, 1);

      assert.strictEqual(inventory.items.length, 3);

      assert.deepEqual(inventory.items[0], itemStackable2);
      assert.deepEqual(inventory.items[1], itemNonStackable);
      assert.deepEqual(inventory.items[2], itemNonStackable2);
    });  
  })
});
