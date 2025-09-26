# MediDash - AI-Powered Hospital Management System

MediDash is a modern, comprehensive, and interactive hospital management system designed to streamline clinical workflows and improve patient care. It provides a centralized platform for managing patients, staff, appointments, billing, and various specialized hospital departments. A key feature of MediDash is its integration with the Google Gemini API to provide AI-powered insights, such as symptom analysis.

[![Open in AI Studio](https://img.shields.io/badge/Open%20in-AI%20Studio-blue?logo=google&logoColor=white)](https://aistudio.google.com/app)

---

## ✨ Key Features

MediDash is packed with features designed for a modern healthcare environment:

### Core Operations
*   **Interactive Dashboard:** Get a real-time, at-a-glance overview of hospital operations, including patient census, bed occupancy rates, average length of stay, and scheduled surgeries.
*   **Live Vitals Monitoring:** A dedicated section on the dashboard provides live-updating charts for the vital signs of critical patients.
*   **Comprehensive Patient Management:** Maintain detailed patient records, including admission details, medical history, imaging studies, and a complete treatment timeline.
*   **Appointment Scheduling:** A simple interface to book, view, and manage patient appointments with doctors.
*   **Surgical Scheduling:** Organize and view the upcoming surgical schedule, including patient details, procedure, surgeon, and operating room status.
*   **Billing & Invoicing:** Generate, track, and manage patient invoices with status indicators for paid, pending, and overdue bills.
*   **Staff Management:** A complete directory of all hospital staff, their roles, departments, and on-call status.

### Advanced & Specialized Modules
*   **🤖 AI-Powered Symptom Checker:** Leveraging the **Google Gemini API**, this tool allows medical professionals to input patient symptoms and receive a preliminary differential diagnosis, suggested next steps, and potential red flags.
*   **Bed Management:** A visual, color-coded grid representing all hospital beds across different wards, showing their current status (Occupied, Available, Cleaning).
*   **Pharmacy & Inventory:** Keep track of medication stock levels and general hospital supplies, with visual indicators for low stock.
*   **Laboratory & Genomics:** View and manage lab results and explore genomic variant data for personalized medicine insights.
*   **Telemedicine Hub:** A dedicated section for managing virtual consultations and remote patient care.
*   **Financials Dashboard:** Visualize the hospital's financial health with charts for revenue vs. expenses and costs broken down by department.

### System & User Experience
*   **Global Search:** Quickly find patients or staff members from anywhere in the application.
*   **Real-time Notifications:** An integrated notification system alerts users to critical events, new messages, and billing updates.
*   **Dark & Light Modes:** A sleek, modern interface with a user-toggleable dark mode for comfortable viewing in any lighting condition.
*   **Responsive Design:** The interface is designed to work seamlessly on various screen sizes.
*   **Modal-driven Workflow:** Adding new patients, appointments, or invoices is done through intuitive and non-disruptive modals.

---

## 🛠️ Technology Stack

*   **Frontend:** React, TypeScript
*   **Styling:** Tailwind CSS
*   **AI Integration:** Google Gemini API (`@google/genai`)
*   **Data Visualization:** Recharts

---

## 🚀 How It Works

This application is designed to run in a browser-based environment like Google's AI Studio.

1.  **Launch the App:** Open the project using the "Open in AI Studio" link above.
2.  **Explore Modules:** Use the sidebar navigation to explore all the features, from the main dashboard to specialized views like Bed Management and Genomics.
3.  **Use the AI Symptom Checker:**
    *   Navigate to the "Symptom Checker" module.
    *   For this feature to work, you must have a Google Gemini API key. Configure it as an environment variable named `API_KEY` in your project settings.
    *   Enter patient symptoms into the text area and click "Analyze" to see insights from the Gemini model.
