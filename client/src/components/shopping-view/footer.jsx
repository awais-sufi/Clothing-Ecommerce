import { HousePlug, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function ShoppingFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HousePlug className="h-6 w-6" />
              <span className="font-bold text-xl">Ecommerce</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted online shopping platform for the best products at unbeatable prices.
              We offer a wide range of categories to meet all your shopping needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop/listing" className="hover:text-white">All Products</Link></li>
              <li><Link to="/shop/listing?category=men" className="hover:text-white">Men</Link></li>
              <li><Link to="/shop/listing?category=women" className="hover:text-white">Women</Link></li>
              <li><Link to="/shop/listing?category=kids" className="hover:text-white">Kids</Link></li>
              <li><Link to="/shop/listing?category=accessories" className="hover:text-white">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop/account" className="hover:text-white">My Account</Link></li>
              <li><Link to="/shop/account" className="hover:text-white">Track Order</Link></li>
              <li><Link to="/shop/account" className="hover:text-white">Shopping Cart</Link></li>
              <li><Link to="/shop/home" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Tech Street, City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@ecommerce.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter;