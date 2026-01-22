// Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2
const products = [
    new Product(1, "Iphone 15", 20000000, 10, "Dien thoai", true),
    new Product(2, "Samsung Galaxy S25", 18000000, 5, "Dien thoai", true),
    new Product(3, "Macbook Pro M2", 35000000, 0, "Laptop", true),
    new Product(4, "iPad Air", 15000000, 20, "May tinh bang", true),
    new Product(5, "AirPods Pro", 5000000, 15, "Accessories", true),
    new Product(6, "Asus Tus Gaming F15", 20000000, 0, "Laptop", false)
];
// Cau 3
let cau3 = products.map(function(e) {
    return { name: e.name, price: e.price };
});
console.log("Câu 3: Danh sách Tên và Giá sản phẩm:");
console.table(cau3);

// Cau 4
let cau4 = products.filter(function(e) {
    return e.quantity > 0;
});
console.log("Câu 4: Các sản phẩm còn hàng trong kho:");
console.table(cau4);

// Cau 5
let cau5 = products.some(function(e) {
    return e.price > 30000000;
});
console.log("Câu 5: Có sản phẩm nào giá > 30tr không? ->", cau5);

// Cau 6
let cau6 = products
    .filter(function(e) { 
        return e.category === "Accessories"; })
    .every(function(e) { 
        return e.isAvailable === true; });
console.log("Câu 6: Tất cả sản phẩm Accessories đều đang bán? ->", cau6);

// Cau 7
let cau7 = products.reduce(function(sum, e) {
    return sum + (Number(e.price) * Number(e.quantity));
}, 0);
console.log("Câu 7: Tổng giá trị kho hàng là:", cau7.toLocaleString(), "VND");

// Cau 8
console.log("Câu 8: Duyệt danh sách :");
for (const p of products) {
    let trangThai = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`+ ${p.name} - ${p.category} - ${trangThai}`);
}

// Cau 9
console.log("Câu 9: Thuộc tính của sản phẩm đầu tiên :");
let spMau = products[0];
for (const key in spMau) {
    console.log(`  > ${key}: ${spMau[key]}`);
}

// Cau 10
let cau10 = products
    .filter(function(e) {
        return e.isAvailable === true && e.quantity > 0;
    })
    .map(function(e) {
        return e.name;
    });
console.log("Câu 10: Danh sách tên sản phẩm Đang bán & Còn hàng:", cau10);