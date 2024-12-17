import Image from "next/image";
import { Metadata } from "next";
import g1 from '@/../public/GearUpImage1.svg'
import p3 from "@/../public/herop3.png"

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-20">
      <div className="max-w-6xl mx-auto rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div>
            <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Customs regulation for India requires a copy of the recipient&apos;s <br />
              KYC. The address on the KYC needs to match the shipping <br />address.
              Our courier will contact you via SMS/email to obtain <br /> a copy of
              your KYC. The KYC will be stored securely and <br />used solely for the
              purpose of clearing customs (including <br />sharing it with customs
              officials) for all orders and returns. If <br />your KYC does not match your shipping address, please
              click <br /> the link for more information. <span className="underline">Learn More</span>
            </p>
            <button className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
              Deliver It
            </button>

            <form className="space-y-4 mt-6">
              <div>
                <label className="block text-xl font-bold mb-5 text-gray-700">Enter your name and address:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 1"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 2"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 3"
                />
              </div>
              <div className="flex gap-3 mb-5">
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Postal Code"
                />
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Locality"
                />
              </div>
              <div className="flex gap-3 mb-5">
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="State/Territory"
                />
                <select className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1">
                  <option>India</option>
                </select>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Save this address to my profile
                </label>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Make this my preferred address
                </label>
              </div>

              <div>
                <h3 className="mt-10 font-bold text-2xl">What&apos;s your contact information?</h3>
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="number"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Phone Number"
                />
              </div>

              <h3 className="mt-10 font-bold text-2xl">What&apos;s your PAN?</h3>

              <div>
                <input
                  type="number"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="PAN"
                />
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Save PAN details to Nike Profile
                </label>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  I have read and consent to eShopWorld processing my information in
                  accordance with the <span className="underline">Privacy Stateg1t </span> and{" "}
                  <span className="underline">Cookie Policy.</span> eShopWorld is a trusted Nike partner.
                </label>
              </div>

              <div className="mt-6">
                <button className="mt-14 w-full h-16 text-2xl bg-gray-200 py-3 rounded-full hover:bg-gray-200 transition flex items-center justify-center gap-3">
                  Continue
                </button>
              </div>

              <div>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Delivery</h3>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Shipping</h3>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Billing</h3>
                <h3 className="font-bold border-t pt-6">Payg1t</h3>
              </div>
            </form>
          </div>

          
          <div className="mr-20 m-20 -mt-2">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-lg font-semibold">Order Summary</h3>

              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-base font-semibold mt-4 border-t pt-4">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
            </div>

            <div>
              <h4 className="text-2xl mt-10 font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</h4>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Image src={g1} alt="g1" className="w-full" />
                  <div>
                    <p className="text-xl font-medium">Nike Dri-FIT ADV TechKnit Ultra g1&apos;s Short-Sleeve Running Top</p>
                    <p className="text-xs text-gray-600">Qty: 1,<br /> Size: L</p>
                    <span className="font-semibold">₹ 3,895.00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Image src={p3} alt="p3" className="w-full" />
                </div>
                <div className="mr-16">
                  <p className="text-xl font-medium">Nike Air Max 97 SE g1&apos;s Shoes</p>
                  <p className="text-xs text-gray-600">Qty: 1, Size: UK 8</p>
                  <span className="font-semibold">₹ 16,995.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: "Checkout - Nike",
  description: "Designed by Uziar Bin Asif",
};