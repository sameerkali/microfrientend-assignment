import React, { useState } from "react";
import "./EmailApp.css";

const EmailApp = () => {
  const [emails, setEmails] = useState([]);
  const [showCompose, setShowCompose] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [form, setForm] = useState({ to: "", subject: "", body: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    if (form.to && form.subject && form.body) {
      setEmails([{ ...form, id: Date.now(), date: new Date().toLocaleString() }, ...emails]);
      setForm({ to: "", subject: "", body: "" });
      setShowCompose(false);
    }
  };

  return (
    <div className="email-container">
      <div className="email-header">
        <h2>Email</h2>
        <button className="compose-button" onClick={() => setShowCompose(true)}>Compose</button>
      </div>

      <div className="email-list">
        {emails.length === 0 ? (
          <p className="no-emails">No emails yet. Click "Compose" to create a new email.</p>
        ) : (
          emails.map((email) => (
            <div key={email.id} className="email-item" onClick={() => setSelectedEmail(email)}>
              <p><strong>To:</strong> {email.to}</p>
              <p><strong>Subject:</strong> {email.subject}</p>
              <p className="email-preview">{email.body}</p>
              <p className="email-date">{email.date}</p>
            </div>
          ))
        )}
      </div>

      {showCompose && (
        <div className="modal">
          <div className="modal-content">
            <h3>Compose Email</h3>
            <input type="email" name="to" placeholder="Recipient Email" value={form.to} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
            <textarea name="body" placeholder="Type your message..." value={form.body} onChange={handleChange}></textarea>
            <div className="modal-actions">
              <button className="cancel" onClick={() => setShowCompose(false)}>Cancel</button>
              <button onClick={sendEmail}>Send</button>
            </div>
          </div>
        </div>
      )}

      {selectedEmail && (
        <div className="modal">
          <div className="modal-content">
            <h3>Email Preview</h3>
            <p><strong>From:</strong> you@email.com</p>
            <p><strong>To:</strong> {selectedEmail.to}</p>
            <p><strong>Subject:</strong> {selectedEmail.subject}</p>
            <p className="email-date">{selectedEmail.date}</p>
            <p className="email-body">{selectedEmail.body}</p>
            <div className="modal-actions">
              <button className="cancel" onClick={() => setSelectedEmail(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailApp;
