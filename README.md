# Ecommerce 🛒  

A **MERN stack** e-commerce web application for online shopping with features like product browsing, cart management, checkout, and order tracking.

## Features  
- 🛍️ **Product Catalog** – Browse products by category and brand  
- 🔍 **Search & Filtering** – Easily find the right products  
- 🛒 **Shopping Cart** – Add and manage cart items  
- 📦 **Order Management** – Track order status  
- 👤 **User Authentication** – Secure login using JWT  
- 💳 **Secure Payments** – Integrated payment system (Stripe, Razorpay, PayPal)  
- 🎨 **Modern UI/UX** – Responsive design using Tailwind CSS  

## Tech Stack  
- **Frontend:** React.js, Vite  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Styling & UI:** Tailwind CSS, Shadcn UI  
- **State Management:** Redux Toolkit  
- **Payment Integration:** Stripe, Razorpay, PayPal  

## Project Structure  

```
geek2fix/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin-view/       # Admin dashboard components
│   │   │   ├── auth/             # Auth pages (login, register)
│   │   │   ├── common/           # Shared components
│   │   │   ├── shopping-view/    # Shopping page components
│   │   │   └── ui/               # UI components (shadcn)
│   │   ├── pages/
│   │   │   ├── admin-view/       # Admin pages
│   │   │   ├── auth/             # Auth pages
│   │   │   ├── shopping-view/    # Shopping pages
│   │   │   └── not-found/        # 404 page
│   │   ├── store/                # Redux slices
│   │   │   ├── admin/            # Admin state
│   │   │   ├── auth-slice/       # Auth state
│   │   │   ├── common-slice/     # Common state
│   │   │   └── shop/             # Shopping state (cart, products, orders)
│   │   ├── config/               # App configuration
│   │   ├── lib/                  # Utility functions
│   │   ├── assets/               # Images and static assets
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── public/                   # Public assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
│
├── server/                    # Node.js backend
│   ├── controllers/            # Route controllers
│   │   ├── admin/               # Admin controllers
│   │   └── shop/                # Shopping controllers
│   ├── db/                      # Database connection
│   ├── models/                  # Mongoose models
│   ├── routes/                  # API routes
│   │   ├── admin/               # Admin routes
│   │   ├── auth/                # Auth routes
│   │   ├── common/              # Common routes
│   │   └── shop/                # Shopping routes
│   ├── utils/                   # Utility functions
│   ├── index.js                 # Server entry point
│   └── package.json
│
├── package.json                # Root package.json
└── README.md
```

## Installation  

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/geek2fix.git
   cd geek2fix
   ```

2. Install server dependencies:
   ```sh
   cd server
   npm install
   ```

3. Install client dependencies:
   ```sh
   cd ../client
   npm install
   ```

## Environment Variables  

Create a `.env` file in the `server/` directory with the following variables:

```env
# Server Port
PORT=5000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Client URL
CLIENT_URL=http://localhost:5173
```

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Running the Project  

1. Start the backend server:
   ```sh
   cd server
   npm run dev
   ```

2. Start the frontend (in a new terminal):
   ```sh
   cd client
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## License  

MIT