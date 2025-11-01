import React, { useState, useEffect } from "react";
import "./index.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status.includes("Thanks")) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !msg) { 
      setStatus("Please fill all fields"); 
      return; 
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("Thanks! We will contact you soon.");
    setName(""); 
    setEmail(""); 
    setMsg("");
    setIsSubmitting(false);
  };

  return (
    <section className="contact container">
      <div className="floating-element"><i className="ri-mail-send-fill"></i></div>
      <div className="floating-element"><i className="ri-chat-3-fill"></i></div>
      <div className="floating-element"><i className="ri-phone-fill"></i></div>
      <div className="floating-element"><i className="ri-customer-service-2-fill"></i></div>
      <div className="floating-element"><i className="ri-message-2-fill"></i></div>
      
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Your name" 
            type="text"
            required
          />
        </div>
        
        <div className="input-group">
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Your email" 
            type="email"
            required
          />
        </div>
        
        <div className="input-group">
          <textarea 
            value={msg} 
            onChange={e => setMsg(e.target.value)} 
            placeholder="Your message..." 
            rows="6"
            required
          ></textarea>
        </div>
        
        <div style={{display: "flex", gap: "15px", justifyContent: "center"}}>
          <button 
            className="btn btn-primary" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="ri-loader-4-line" style={{animation: "spin 1s linear infinite"}}></i>
                Sending...
              </>
            ) : (
              <>
                <i className="ri-send-plane-fill"></i>
                Send Message
              </>
            )}
          </button>
        </div>
      </form>

      {status && (
        <div className={`status ${status.includes("Thanks") ? "success" : "error"}`}>
          <i className={status.includes("Thanks") ? "ri-checkbox-circle-fill" : "ri-error-warning-fill"}></i>
          {status}
        </div>
      )}
    </section>
  );
}
