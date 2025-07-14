export default function ShippingPolicyPage() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8">Shipping Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">1. Order Processing</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Processing Time:</strong> All orders are processed within a few minutes of being placed through the Vendmat app.</li>
                <li><strong>Order Confirmation:</strong> Once your order is confirmed, you will receive a notification through the app with details of your order and estimated time of availability.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">2. Delivery and Availability</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Delivery Schedule:</strong> Meals are delivered to the Vendmat vending machines four times a day – for breakfast, lunch, snacks, and dinner.</li>
                <li><strong>Pre-Order Cutoff:</strong> Pre-orders must be placed at least 2 hours before the desired meal time.</li>
                <li><strong>Availability Window:</strong> Each meal is available in the vending machine for a period of 3.5 hours after delivery to ensure freshness.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">3. Pick-Up Instructions</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Notification:</strong> You will receive a notification when your meal is ready for pickup from the Vendmat machine.</li>
                <li><strong>Grab & Go:</strong> Meals available for immediate pickup can be selected directly from the machine using the app.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">4. Refunds and Cancellations</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Cancellations:</strong> Orders can be canceled up to 2 hours before the scheduled delivery time.</li>
                <li><strong>Refund Policy:</strong> If you encounter any issues with your order, please contact our customer support through the app for a resolution. Refunds will be processed on a case-by-case basis.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">5. Customer Support</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Contact Us:</strong> For any questions or concerns regarding your order, please reach out to our customer support team through the Vendmat app or email us at support@vendmat.com.</li>
                <li><strong>Support Hours:</strong> Our support team is available from 9 AM to 9 PM, Monday to Friday.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">6. Modifications</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Policy Changes:</strong> Vendmat reserves the right to modify this shipping policy at any time. Changes will be updated on this page and notified to users through the app.</li>
              </ul>
              
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6 mt-8">
                <p className="text-orange-300 text-center">
                  Thank you for choosing Vendmat! We strive to provide you with a seamless and enjoyable dining experience at your workplace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 