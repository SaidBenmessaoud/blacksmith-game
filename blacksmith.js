// Variables
let fireStatus = false; // Indicates if the fire is burning or not
let wood = 10; // Amount of wood available
let gold = 10; // Amount of gold available
let ore = 0; // Amount of ore available
let inventoryItems = { sword: 0, axe: 0 }; // Inventory of crafted items

// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire() {
  if (!fireStatus && wood > 0) {
    fireStatus = true;
    wood--;
    console.log('The fire is going.');
  } else if (fireStatus) {
    fireStatus = false;
    console.log('The fire is out.');
  } else {
    console.log('You do not have enough wood. Buy wood using the buy("wood") command.');
  }
  updateStatus();
}

/**
 * buy
 * Buy supplies (wood or ore)
 */
function buy(item) {
  if (fireStatus) {
    console.log('You cannot buy items while the fire is burning.');
    return;
  }
  if (item === 'ore') {
    if (gold >= 3) {
      ore++;
      gold -= 3;
      console.log('You bought 1 ore.');
    } else {
      console.log('You do not have enough gold.');
    }
  } else if (item === 'wood') {
    if (gold >= 1) {
      wood++;
      gold -= 1;
      console.log('You bought 1 wood.');
    } else {
      console.log('You do not have enough gold.');
    }
  } else {
    console.log('Invalid item. You can only buy "ore" or "wood".');
  }
  updateStatus();
}

/**
 * make
 * Make items (sword or axe)
 */
function make(item) {
  if (!fireStatus) {
    console.log('You need the fire going to make items.');
    return;
  }
  if (item === 'sword') {
    if (ore >= 2 && wood >= 1) {
      ore -= 2;
      wood -= 1;
      inventoryItems.sword++;
      console.log('You made 1 sword.');
    } else {
      console.log('You do not have enough resources to make this item.');
    }
  } else if (item === 'axe') {
    if (ore >= 1 && wood >= 2) {
      ore -= 1;
      wood -= 2;
      inventoryItems.axe++;
      console.log('You made 1 axe.');
    } else {
      console.log('You do not have enough resources to make this item.');
    }
  } else {
    console.log('Invalid item. You can only make "sword" or "axe".');
  }
  updateStatus();
}

/**
 * sell
 * Sell items (sword or axe)
 */
function sell(item) {
  if (fireStatus) {
    console.log('You need to put out the fire to sell items.');
    return;
  }
  if (item === 'sword') {
    if (inventoryItems.sword > 0) {
      inventoryItems.sword--;
      gold += 5;
      console.log('You sold 1 sword for 5 gold.');
    } else {
      console.log('You do not have any swords to sell.');
    }
  } else if (item === 'axe') {
    if (inventoryItems.axe > 0) {
      inventoryItems.axe--;
      gold += 4;
      console.log('You sold 1 axe for 4 gold.');
    } else {
      console.log('You do not have any axes to sell.');
    }
  } else {
    console.log('Invalid item. You can only sell "sword" or "axe".');
  }
  updateStatus();
}

/**
 * inventory
 * Show current inventory
 */
function inventory() {
  console.log(`Inventory - Swords: ${inventoryItems.sword}, Axes: ${inventoryItems.axe}`);
}

/**
 * help
 * Show game instructions
 */
function help() {
  console.log(`INSTRUCTIONS:
  Blacksmith is a simple text-based game.
  
  As a blacksmith, you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item): Buy supplies (wood or ore)
  - make(item): Make items (sword or axe)
  - sell(item): Sell items (sword or axe)
  - fire(): Start or stop the fire
  - inventory(): Show current inventory
  - help(): Show game instructions`);
}

/**
 * updateStatus
 * Show current resources and inventory
 */
function updateStatus() {
  console.log(`Wood: ${wood}`);
  console.log(`Ore: ${ore}`);
  console.log(`Gold: ${gold}`);
  console.log(`Fire Status: ${fireStatus ? 'Going' : 'Out'}`);
  console.log(`Inventory: Swords: ${inventoryItems.sword}, Axes: ${inventoryItems.axe}`);
}

// Log the help() function and initial status display
help();
updateStatus();
