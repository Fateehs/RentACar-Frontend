# RentACar Frontend

An Angular-based Single Page Application (SPA) serving as the frontend for the RentACar system. Built using Angular CLI with a clean component structure, state management, and modular architecture.

---

## 🚀 Tech Stack

- **Framework:** Angular (latest version via Angular CLI)
- **Language:** TypeScript, RxJS
- **UI & Styling:** Angular Material / Bootstrap (if used)
- **Routing:** Angular Router for navigation
- **HTTP & Data Handling:** Angular HttpClient for API communication
- **State Management:** NgRx or Angular built-in services (if implemented)
- **Authentication:** JWT token handling & route guards
- **Forms:** Reactive Forms with Validators
- **Development Tools:** Angular CLI, ESLint, Prettier

---

## 🧱 Project Structure

| Folder                | Description |
|-----------------------|-------------|
| `src/app/core`        | Core services (auth, interceptors, http), global modules |
| `src/app/shared`      | Shared components, pipes, directives |
| `src/app/components`  | Feature components (Cars, Rentals, Customers, Login, etc.) |
| `src/app/services`    | API service wrappers for REST endpoints |
| `src/app/auth`        | Authentication & guard logic |
| `src/app/models`      | Shared TypeScript interfaces and models |

---

## ✅ Features

- User authentication (login/register) using JWT
- Role-based UI (admin vs regular user)
- CRUD pages for Cars, Brands, Colors, Customers, Rentals
- Reactive forms with validations and feedback
- API communication with CORS and centralized error handling
- UI components built with Angular Material / Bootstrap
- Lazy-loaded modules and route guards for optimized performance
- Responsive design support

---

## 🔧 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/Fateehs/RentACar-Frontend.git
cd RentACar-Frontend
```
### 2. Install Dependencies:
```
npm install
```
### 3. Configure API Endpoints:
In src/environments/, update the baseApiUrl to point to your backend host:
```
export const environment = {
  production: false,
  baseApiUrl: 'https://localhost:5001/api'
};
```
4. Run the App:
```
ng serve
```
Visit: http://localhost:4200

## 🔐 Authentication Setup
Login and registration handled via JWT tokens

Tokens stored securely (e.g. localStorage / sessionStorage)

Route guards ensure protected routes are only accessible to authorized roles

Interceptor manages token attachment to outgoing HTTP requests

## 📄 Developer Guidelines
Use Angular CLI commands for generating components, services, modules

Adhere to clean architecture with separation of concerns

Follow consistent naming conventions and folder structures

Use Reactive Forms throughout for validation and dynamic form control

Catch and handle API errors globally using an HTTP Error Interceptor

## 🛠 Extensions & Testing (Optional)
Add unit tests using Jasmine & Karma

Implement integration/e2e tests with Protractor or Cypress

Integrate state management using NgRx

Use Docker for containerized frontend deployment

Add CI/CD workflows (GitHub Actions / Azure Pipelines)

## 🔮 Future Enhancements
Dark mode / theme toggling

Improved UI/UX components (modals, snackbars, dashboards)

Admin roles for managing RentACar entities

Internationalization (i18n) support

Accessibility improvements (WCAG compliance)

## 👤 Author

**Fatih Enes Selvi**  
- 💼 [LinkedIn Profile](https://linkedin.com/in/fatih-enes-selvi-0217681b2)  
- 🌐 [Portfolio Website](https://fatihselvi.com)

## 📄 License
This project is open-source. License details to be added.
