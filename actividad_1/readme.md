El inventario de nuestro juego RPG tiene el siguiente formato
|  0  |  1  |  2  |  3  |
|-----|-----|-----|-----|
|  **4**  |  **5**  |  **6** |  **7**  |
|  **8**  | **9**   | **10**  | **11**  |

esta conformado por slots (cada cuadrado)

Nuestro objetivo es armar el inventario que tiene las siguientes reglas:
 - Total de 12 slots.
 - Cada slot puede ser ocupado unicamente por 1 **itemStack***.
 - Los slots se numeran de izquierda a derecha y de arriba abajo (0-11).
 - ItemStack es la cantidad maxima de items del mismo tipo que pueden ocupar un slot del inventario.
  
###Slot
    
```typescript
{
    id: number
    itemStack: ItemStack | null
}
```
###ItemStack

```typescript
{
    uid: string;
    item: Item;
    quantity: number;
}
```
  
###Item

```typescript 
{
    uid: string; // unique identifier
    gid: string; // game item id
    name: string; 
    description: string;
    type: ItemType;
}
``` 
###ItemType
```typescript 
{
    Consumable: 0,
    Resource: 1,
    Weapon: 2,
    Armor: 3,
    Unset: 4,
}
```  

###Inventory 
```typescript
{
   slots: Slot[]
   slotsMap: Record<number,Slot>
   items: ItemStack[]
}
```

##### StackSize
Los items de tipo (ItemType) tienen un stack size definido de:

**Stackable items**
    - Consumable: 16
    - Resource:   999

**Non stackable items**
    - Weapon: 1
    - Armor: 1


### Ejercicios
Las actividades son repaso de los puntos que vimos en la capacitación.

Los lugares a cambiar estan marcados con **ACTIVIDAD**  y **FIN ACTIVIDAD**

El codigo es el resultado del enunciado planteado


### Instalacion
    cd actividad_1
    npm install

### Verificacion
    npm test  

La actividad se considera completada si pasa los tests.