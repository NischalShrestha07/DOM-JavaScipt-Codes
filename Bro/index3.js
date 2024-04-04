const store=new Map([
    [
        "tshirts",20],
        ["Jeans",21],
        ["Underwear",50]

]);

let shoppingCart=0
shoppingCart+=store.get("Underwear")

console.log(shoppingCart);

store.forEach((value,key)=>console.log(`${key}  ${value}`));
