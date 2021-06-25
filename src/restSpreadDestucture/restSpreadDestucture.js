//rest//rest//rest//rest//rest//rest//rest//rest//rest//rest
//rest > parametre ...variable                    <<<<<<<<<<
let showProduct = function (id, ...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProduct)
// showProduct(8, "Elma", "Armut", 25, {id:3}, [15, 42])
//Örnek math.max in parametresi rest tir(...numbers)
console.log(Math.max(1, 15, 23, 4, 47, 95, 9))

// ya da

//spread//spread//spread//spread//spread//spread//spread//spread
//spread > dizi'[]' ya da object'{}' elemanlarını ayrıştırır <<<<<<
let points = [1, 15, 23, 4, 47, 95, 9]
console.log(Math.max(points)) // HATA!> 'points' TEK BİR DİZİ! SPREAD EDİLMELİ
console.log(Math.max(...points)) // Çalışır.
console.log(..."ABC","D", ..."EFGH", ..."IJ")

//Destucturing//Destucturing//Destucturing//Destucturing//Destucturing//Destucturing
//Destucturing>
//spread gibidir, ancak ayrıştırdığı değerleri yeni birer değişkene aktarır
//Yazımı, şekil olarak dizi tanımının tersi gibidir. Örnek:
//Dizi Tanımı>    let diziDegisken = [100, 200, 300, 400]
//Destucturing> let [deg1, degisken2, deger3, elma4] = [100, 200, 300, 400] ya da
//Destucturing> let [baskadeg1, de2, dgr3, dd4] = diziDegisken 
let populations = [10000, 20000, 30000]
let [small, medium, high] = populations  //<<<< Destucturing. Artık değerler yeni değişkenlerde
console.log(small)
console.log(medium)
console.log(high)
let populations2 = [10000, 20000, 30000,[40000,50000]]
let [smallx, mediumx, highx, veryHighx, maximumx] = populations2 //HATALI
let [small2, medium2, high2, [veryHigh, maximum]] = populations2
console.log(small2)
console.log(medium2)
console.log(high2)
console.log(veryHigh)
console.log(maximum)

//Destucturing>  Fonksiyonda (parametresinde) Destucturing> 
function someFunction([small1], number) {
    console.log(small1)    
}
someFunction(populations)

//Destucturing>  Object Destucturing> 
let category= {id: 1, name1: "İçecek"}
console.log(category.id)
console.log(category["name1"])   //<<<<< AYNI console.log(category.name1)

let {id, name1} = category
console.log(id)
console.log(name1)