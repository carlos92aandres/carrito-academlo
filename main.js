import loader from "./componets/loaders.js"
import showMenu from "./componets/showMenu.js"
import showCart from "./componets/showCart.js"
import products from "./componets/products.js"
import getProducts from "./componets/getProducts.js"
import cart from "./componets/cart.js"



/*ocultar loader*/
loader()
/*mostrar menu*/
showMenu()
/*mostrat cart*/
showCart()
/* End UI Elements */

/* Products */
const {db , printProducts}  = products(await getProducts())
/* Carrito */
cart (db,printProducts)

