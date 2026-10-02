/* =========================
   INQUIRY FORM HANDLER
   =========================
   Prepares a WhatsApp message and
   an email draft from the form fields.
   ========================= */

const form = document.getElementById("inquiryForm");
const emailLink = document.getElementById("emailInquiry");
const statusEl = document.getElementById("status");

const WHATSAPP_NUMBER = "9779868731307";
const EMAIL_ADDRESS = "astraineducation@gmail.com";

/* Collect form data */
function getFormData() {
  return {
    name: document.getElementById("name")?.value.trim() || "",
    phone: document.getElementById("phone")?.value.trim() || "",
    email: document.getElementById("email")?.value.trim() || "",
    destination: document.getElementById("destination")?.value || "",
    service: document.getElementById("service")?.value || "",
    message: document.getElementById("message")?.value.trim() || ""
  };
}

/* Build the message text */
function buildMessage(data) {
  return `Hello Astra International Education,

I would like to make a study-abroad inquiry.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Study Destination: ${data.destination || "Not specified"}
Service: ${data.service || "Not specified"}

Message:
${data.message}

Sent from the Astra International Education website.`;
}

/* Validate required fields */
function validate(data) {
  if (!data.name) {
    return "Please enter your full name.";
  }
  if (!data.phone) {
    return "Please enter your phone number.";
  }
  if (!data.message) {
    return "Please write a short message about your study plans.";
  }
  return null;
}

/* Show status message */
function showStatus(text, isError = false) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.style.color = isError ? "#b91c1c" : "#0a5f57";
}

/* WhatsApp submission */
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = getFormData();
  const error = validate(data);

  if (error) {
    showStatus(error, true);
    return;
  }

  showStatus("Opening WhatsApp...");

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(buildMessage(data));

  window.open(url, "_blank", "noopener");
});

/* Live update the email link as the user types */
function updateEmailLink() {
  if (!emailLink) return;

  const data = getFormData();
  const subject = "Website Inquiry - " + (data.name || "New Inquiry");
  const body = buildMessage(data);

  emailLink.href =
    "mailto:" +
    EMAIL_ADDRESS +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}

/* Attach live listeners */
form?.addEventListener("input", updateEmailLink);
form?.addEventListener("change", updateEmailLink);

/* Initial call so the email link is ready on page load */
updateEmailLink();