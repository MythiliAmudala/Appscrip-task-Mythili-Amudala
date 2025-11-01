import React, { useState } from "react";
import "./index.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaGooglePay, FaApplePay, FaAmazonPay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setEmail("");
    setIsLoading(false);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const paymentLinks = {
    visa: "https://usa.visa.com/",
    mastercard: "https://www.mastercard.us/",
    amex: "https://www.americanexpress.com/",
    paypal: "https://www.paypal.com/",
    "google-pay": "https://pay.google.com/",
    "apple-pay": "https://www.apple.com/apple-pay/",
    phonepe: "https://www.phonepe.com/",
    "amazon-pay": "https://pay.amazon.com/",
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className={`subscribe-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spin">Loading...</span> SUBSCRIBING...
                  </>
                ) : (
                  "SUBSCRIBE"
                )}
              </button>
            </form>
            {isSubscribed && (
              <div className="success-message">Success! Thank you for subscribing.</div>
            )}
          </div>

          <div className="footer-links-grid">
            <div className="footer-section">
              <h4>mettā muse</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/stories">Stories</a></li>
                <li><a href="/artisans">Artisans</a></li>
                <li><a href="/boutiques">Boutiques</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/compliance">EU Compliances Docs</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="/shipping">Orders & Shipping</a></li>
                <li><a href="/seller">Join/Login as a Seller</a></li>
                <li><a href="/pricing">Payment & Pricing</a></li>
                <li><a href="/returns">Return & Refunds</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>CONTACT US</h4>
              <div className="contact-info">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
              <div className="currency-section">
                <h4>CURRENCY</h4>
                <div className="currency-info">
                  <div className="currency-badge">USD</div>
                  <p>
                    Transactions will be completed in Euros and a currency
                    reference is available on hover.
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>FOLLOW US</h4>
              <div className="social-links">
                <a href="https://instagram.com/mettamuse" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com/company/mettamuse" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://twitter.com/mettamuse" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://facebook.com/mettamuse" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              </div>

              <div className="payment-methods">
                <h4>mettā muse ACCEPTS</h4>
                <div className="payment-grid">
                  <a href={paymentLinks["visa"]} target="_blank" rel="noopener noreferrer"><FaCcVisa /><span>Visa</span></a>
                  <a href={paymentLinks["mastercard"]} target="_blank" rel="noopener noreferrer"><FaCcMastercard /><span>Mastercard</span></a>
                  <a href={paymentLinks["amex"]} target="_blank" rel="noopener noreferrer"><FaCcAmex /><span>Amex</span></a>
                  <a href={paymentLinks["paypal"]} target="_blank" rel="noopener noreferrer"><FaCcPaypal /><span>PayPal</span></a>
                  <a href={paymentLinks["google-pay"]} target="_blank" rel="noopener noreferrer"><FaGooglePay /><span>Google Pay</span></a>
                  <a href={paymentLinks["apple-pay"]} target="_blank" rel="noopener noreferrer"><FaApplePay /><span>Apple Pay</span></a>
                  <a href={paymentLinks["phonepe"]} target="_blank" rel="noopener noreferrer"><SiPhonepe /><span>PhonePe</span></a>
                  <a href={paymentLinks["amazon-pay"]} target="_blank" rel="noopener noreferrer"><FaAmazonPay /><span>Amazon Pay</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © {currentYear} mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
