export default function CancellationRefundPage() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8">Cancellation & Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-400 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>
              
              <p className="mb-6 text-gray-300">
                At Vendmat, we strive to provide the best possible experience for our customers. This policy outlines our terms for order cancellations and refunds.
              </p>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">1. Order Cancellation</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Pre-Order Cancellations</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Cancellation Window:</strong> Pre-orders can be cancelled up to 2 hours before the scheduled meal delivery time.</li>
                <li><strong>How to Cancel:</strong> Use the Vendmat app to cancel your order or contact our customer support at support@vendmat.com.</li>
                <li><strong>Automatic Refund:</strong> Orders cancelled within the allowed timeframe will receive an automatic full refund within 3-5 business days.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Walk-up Order Cancellations</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Before Dispensing:</strong> Orders can be cancelled before the food is dispensed from the machine.</li>
                <li><strong>After Dispensing:</strong> Once food is dispensed, orders cannot be cancelled due to food safety regulations.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">2. Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Eligible Refund Scenarios</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Order cancelled within the allowed timeframe</li>
                <li>Technical malfunction preventing food dispensing</li>
                <li>Food quality issues (spoiled, incorrect temperature, etc.)</li>
                <li>Incorrect order dispensed</li>
                <li>Machine unavailability during scheduled pickup time</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Refund Process</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Refund Timeline:</strong> Approved refunds are processed within 3-5 business days</li>
                <li><strong>Refund Method:</strong> Refunds are credited back to the original payment method used</li>
                <li><strong>Notification:</strong> You will receive a confirmation notification once the refund is processed</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">3. Non-Refundable Scenarios</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li>Orders cancelled after the 2-hour cutoff time</li>
                <li>Food successfully dispensed and collected by the customer</li>
                <li>Customer no-show during the available pickup window (3.5 hours)</li>
                <li>Personal preference or change of mind after food dispensing</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">4. How to Request a Refund</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Through the App</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-300">
                <li>Open the Vendmat app</li>
                <li>Go to "Order History"</li>
                <li>Select the relevant order</li>
                <li>Choose "Request Refund" and provide reason</li>
                <li>Submit your request</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Customer Support</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                <li><strong>Email:</strong> support@vendmat.com</li>
                <li><strong>Response Time:</strong> Within 24 hours</li>
                <li><strong>Support Hours:</strong> Monday to Friday, 9 AM to 9 PM</li>
                <li><strong>Required Information:</strong> Order ID, timestamp, and reason for refund request</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">5. Dispute Resolution</h2>
              <p className="mb-6 text-gray-300">
                If you're not satisfied with the refund decision, you can escalate your concern to our Grievance Officer:
              </p>
              <ul className="list-none mb-6 text-gray-300">
                <li><strong>Name:</strong> Aayush Sharma</li>
                <li><strong>Email:</strong> support@vendmat.com</li>
                <li><strong>Response Time:</strong> Within 48 hours</li>
                <li><strong>Working Hours:</strong> Monday to Friday, 9 AM to 6 PM</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#f8650c] mt-8 mb-4">6. Policy Updates</h2>
              <p className="mb-6 text-gray-300">
                Vendmat reserves the right to modify this cancellation and refund policy at any time. Changes will be updated on this page and customers will be notified through the app. Continued use of our services constitutes acceptance of any policy changes.
              </p>
              
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6 mt-8">
                <p className="text-orange-300 text-center">
                  <strong>Need Help?</strong><br/>
                  Contact our customer support team at support@vendmat.com or through the Vendmat app for any questions about cancellations or refunds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 