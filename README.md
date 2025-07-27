# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f774fa21-f622-4f14-bbed-30300beb1332

## 🚀 Quick Start & Demo

### **Launch Demo Website (One Command)**

```sh
# Install dependencies and start development server
npm i && npm run dev
```

**✨ Demo will be available at:** `http://localhost:5173`

### **Platform Testing Commands**

```sh
# 🔍 Quick Test (Essential checks)
npm run test

# 🛡️ Full Quality Pipeline (Recommended)
npm run test:full

# 🌐 Build Production Demo
npm run build && npm run preview

# 🔧 Fix Common Issues
npm run lint:fix && npm run audit:fix
```

### **Instant Website Preview**

```sh
# Method 1: Development Mode (Hot Reload)
npm run dev
# Opens: http://localhost:5173

# Method 2: Production Preview
npm run build && npm run preview  
# Opens: http://localhost:4173
```

**💡 Pro Tip**: Use `npm run dev` for editing, `npm run preview` for final testing

---

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f774fa21-f622-4f14-bbed-30300beb1332) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Testing Pipeline & Quality Assurance

This project includes a comprehensive testing infrastructure to ensure code quality and reliability:

### 🔧 **Development Workflow**

1. **Make Changes**: Edit code locally or via Lovable
2. **Pre-commit Validation**: Automatic checks run before each commit
3. **CI/CD Pipeline**: GitHub Actions validate all changes
4. **Code Review**: Optional automated review for quality feedback
5. **Merge Protection**: Only validated code reaches main branch

### 🛡️ **Pre-commit Hooks**

Automatically run before each commit to catch issues early:

- **ESLint**: Code style and error checking
- **TypeScript**: Type safety validation  
- **Build Check**: Ensures deployable artifacts
- **Code Quality**: Removes trailing whitespace, fixes formatting

**Setup Pre-commit Hooks:**
```sh
# Install pre-commit (if not already installed)
pip install pre-commit

# Install git hooks
pre-commit install

# Run manually on all files (optional)
pre-commit run --all-files
```

### 🚀 **GitHub Actions CI/CD**

**Automated Testing on Every Push/PR:**
- **Multi-Node Testing**: Node.js 18.x and 20.x compatibility
- **Security Scanning**: Vulnerability detection with Trivy
- **Build Verification**: Ensures successful production builds
- **Artifact Generation**: Build outputs stored for debugging

**Test Commands:**
```sh
npm run test        # Complete test suite (lint + type-check + build)
npm run test:full   # Full pipeline (audit + lint + type-check + build)
npm run lint        # ESLint validation
npm run lint:fix    # Auto-fix ESLint issues
npm run type-check  # TypeScript compilation check
npm run build       # Production build
npm run audit       # Security vulnerability check
npm run preview     # Preview production build locally
```

### 📊 **Quality Standards**

**All changes must pass:**
- ✅ ESLint validation (max 10 warnings)
- ✅ TypeScript compilation 
- ✅ Successful build generation
- ✅ Security scan (HIGH/CRITICAL issues only)

**Build Requirements:**
- Generate valid `dist/` directory
- Include `index.html` in build output
- No TypeScript errors
- ESLint warnings below threshold

### 🔍 **Security & Monitoring**

- **Vulnerability Scanning**: Automated with Trivy
- **Dependency Checks**: Security issues in packages detected
- **Build Artifact Verification**: Ensures deployable code
- **Error Tracking**: Failed builds prevent merges

### 📚 **Additional Resources**

- **Detailed Testing Guide**: See [TESTING.md](./TESTING.md)
- **Troubleshooting**: Build failures, hook setup, and fixes
- **Workflow Configuration**: `.github/workflows/ci.yml`
- **Hook Configuration**: `.pre-commit-config.yaml`

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f774fa21-f622-4f14-bbed-30300beb1332) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
