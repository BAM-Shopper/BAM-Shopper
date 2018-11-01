/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as ProductList} from './ProductList'
export {default as ProductReview} from './product-review'
export {default as ProductInfo} from './product-info'
export {default as SideBar} from './SideBar'
export {default as ProductThumbnail} from './ProductThumbnail'
export {default as UserHome} from './user-home'
export {default as Home} from './Home'
export {default as SingleProduct} from './SingleProduct'
export {Login, Signup} from './auth-form'
