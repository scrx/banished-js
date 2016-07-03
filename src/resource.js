function Resource(type, value) {
    this.type   = type;
    this.value  = value;

    if ( ! this instanceof Resource)
        return new Resource();

}


function Resources() {

    this.wood   = 0;
    this.stone  = 0;
    this.food   = 0;
    this.gold   = 0;

    if ( ! this instanceof Resources)
        return new Resources();
}


Resources.prototype.getFood = function () {
    return this.food;
}

Resources.prototype.getStone = function () {
    return this.stone;
}

Resources.prototype.getWood = function () {
    return this.wood;
}

Resources.prototype.setWood = function (wood) {
    this.wood = wood;
}

Resources.prototype.getGold = function () {
    return this.gold;
}
