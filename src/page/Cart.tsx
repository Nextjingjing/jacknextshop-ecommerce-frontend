const Cart = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar - Cart Items */}
            <section className="flex-1 p-6 bg-white">
                <h2 className="text-xl font-bold mb-4">Cart Items</h2>
                {/* Placeholder for cart items */}
                <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                    Cart items go here
                </div>
            </section>

            {/* Main Content - Order Summary */}
            <aside className="w-full md:w-80 bg-white p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {/* Placeholder for summary content */}
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                    Summary goes here
                </div>
            </aside>
        </div>
    );
}

export default Cart