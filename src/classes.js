/**
 * (1) Define the following class:
 *
 * BankAccount
 *
 *  Attributes
 *      amount: number // The amount of money in the bank account
 *      name: string // The name given to this bank account.
 *
 *  Methods
 *      constructor(name: string): BankAccount
 *          Creates a new bank account with the given name.
 *      deposit(added_amount: number): number
 *          Consumes the amount the user is depositing into their account, to be added to the amount.
 *          Returns the new balance.
 *      withdraw(amount_requested: number): number
 *          Consumes the amount the user is attempting to withdraw. If the amount in the account
 *          is less than the amount requested, set the account's amount to be 0 and return
 *          however much was in the account before then.
 *      isEmpty(): boolean
 *          Returns whether the account is empty (i.e., at zero).
 *
 */
var BankAccount = /** @class */ (function () {
    function BankAccount(name) {
        this.amount = 0;
        this.name = name;
    }
    /*
     * deposit, adds a given amount to the amount attribute, returns new amount.
     * Consumes: a number
     * Produces: a number
    */
    BankAccount.prototype.deposit = function (added_amount) {
        this.amount += added_amount;
        return this.amount; // returns new balance after amount was added to
    };
    /*
     * amount_requested, returns a given amount, if this given amount exceeds
     * the account balance, return the remaining amount in the account and set
     * amount equal to zero.
     * Consumes: a Number
     * Produces: a Number
    */
    BankAccount.prototype.withdraw = function (amount_requested) {
        var amount_returned = amount_requested;
        if (this.isEmpty()) { // If nothing is in the account, don't return any money
            amount_returned = 0;
        }
        else if (amount_requested > this.amount) {
            amount_returned = this.amount;
            this.amount = 0;
        }
        else {
            this.amount -= amount_requested;
        }
        return amount_returned;
    };
    /*
     * isEmpty, returns true if the accounts amount is 0, false otherwise.
     * Consumes: Nothing
     * Produces: a boolean
    */
    BankAccount.prototype.isEmpty = function () {
        return this.amount == 0;
    };
    return BankAccount;
}());
/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */
var acc1 = new BankAccount("StickyKeysAccount");
var acc2 = new BankAccount("RandomAccount");
var acc3 = new BankAccount("WilliamAccount");
var amount1 = acc1.deposit(1000);
var amount2 = acc2.deposit(200);
var amount3 = acc3.deposit(5000);
console.log("acc1 name: " + acc1.name + ", acc1 amount: " + amount1);
console.log("acc2 name: " + acc2.name + ", acc2 amount: " + amount2);
console.log("acc3 name: " + acc3.name + ", acc3 amount: " + amount3);
console.log();
var newAmount1 = acc1.withdraw(1200);
var newAmount2 = acc2.withdraw(50);
var newAmount3 = acc3.withdraw(10000);
console.log("acc1 name: " + acc1.name + ", acc1 amount withdrawn: " + newAmount1);
console.log("acc2 name: " + acc2.name + ", acc2 amount withdrawn: " + newAmount2);
console.log("acc3 name: " + acc3.name + ", acc3 amount withdrawn: " + newAmount3);
console.log();
/**
 * (3) Define the following class:
 *
 * SpaceShip
 *
 *     Attributes:
 *         x: number // horizontal position on game grid
 *         y: number // vertical position on game grid
 *         callSign: string // Cool name for this ship
 *         onFire: boolean // Whether or not the ship is on fire
 *         ammo: number // How much ammo the ship has
 *         friends: Array<SpaceShip> // Other ships that this ship has met
 *
 *     Methods:
 *         constructor(): SpaceShip
 *             Spaceships start off at (0, 0), not on fire, with 0 ammo, and no friends.
 *         shoot(): void
 *             If there is ammo, decrease it by one and console.log a message about shooting.
 *             If there is no ammo, set the ship on fire.
 *         collectAmmo(clipAmount: number): void
 *             Add the clipAmount to the ammo
 *         makeFriend(newFriend: SpaceShip): boolean
 *             If the new friend has the same X and Y positions, add the newFriend to this
 *             ship's friends.
 *         pingFriends(): void
 *             Print out a message saying hello to each friend, referring to their callsign.
 *         moveTo(x: number, y: number): void
 *             Update the ship's position to the new location.
 *
 */
var SpaceShip = /** @class */ (function () {
    function SpaceShip(callSign) {
        this.x = 0;
        this.y = 0;
        this.callSign = callSign;
        this.onFire = false;
        this.ammo = 0;
        this.friends = [];
    }
    /*
     * shoot, if the ship has ammo, decrease it by one and print msg about shooting,
     * if there is no ammo, set the ship on fire.
     * Consumes: Nothing
     * Produces: Nothing
    */
    SpaceShip.prototype.shoot = function () {
        if (!this.ammo) {
            this.onFire = true;
            console.log("AAAH, I'M ON FIRE.");
        }
        else {
            this.ammo -= 1;
            console.log("Firing now!");
        }
    };
    /*
     * collectAmmo, add the clip amount parameter to the ammo attribute.
     * Consumes: a Number
     * Produces: Nothing
    */
    SpaceShip.prototype.collectAmmo = function (clipAmount) {
        this.ammo += clipAmount;
    };
    /*
     * makeFriend, if the given ship has the same (x,y) coords, add to the friend list.
     * Consumes: a SpaceShip
     * Produces: a boolean
     */
    SpaceShip.prototype.makeFriend = function (newFriend) {
        var madeFriend = false;
        if ((this.x == newFriend.x) && (this.y == newFriend.y)) {
            this.friends.push(newFriend);
            madeFriend = true;
        }
        return madeFriend;
    };
    /*
     * pingFriends, print out a msg for each friend by using their callSign.
     * Consumes: Nothing
     * Produces: Nothing
    */
    SpaceShip.prototype.pingFriends = function () {
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var ship = _a[_i];
            console.log("Hello " + ship.callSign);
        }
    };
    /*
     * moveTo, update the ships position to a given location
     * Consumes: two numbers
     * Produces: Nothing
    */
    SpaceShip.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return SpaceShip;
}());
/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */
var ship1 = new SpaceShip("Megalodon");
var ship2 = new SpaceShip("Big Cola");
var ship3 = new SpaceShip("Fire Distinguisher");
ship1.collectAmmo(5);
ship2.collectAmmo(3);
ship1.shoot();
ship2.shoot();
ship3.shoot();
ship1.moveTo(25, -37);
ship2.moveTo(50, 78);
ship3.moveTo(50, 78);
var isFriends1 = ship2.makeFriend(ship3);
var isFriends2 = ship1.makeFriend(ship3);
ship3.makeFriend(ship2);
console.log("Friend status of Big Cola and Fire Distinguisher: " + isFriends1);
console.log("Friend status of Fire Distinguisher and Megalodon: " + isFriends2);
ship2.pingFriends();
ship3.pingFriends();
