# Testing Infrastructure

This project includes comprehensive testing infrastructure to ensure code quality and functionality before commits and deployments.

## Pre-commit Hooks

Pre-commit hooks run automatically before each commit to catch issues early:

- **ESLint**: Checks for code style and potential errors
- **TypeScript Check**: Validates TypeScript types
- **Build Check**: Ensures the project builds successfully
- **Code Quality**: Removes trailing whitespace, fixes end-of-file issues

### Setup Pre-commit Hooks

```bash
# Install pre-commit (if not already installed)
pip install pre-commit

# Install the git hook scripts
pre-commit install

# (Optional) Run against all files manually
pre-commit run --all-files
```

## GitHub Actions CI/CD

Automated testing runs on every push and pull request:

### Test Matrix
- Tests against Node.js 18.x and 20.x
- Runs ESLint, TypeScript checks, and build process
- Security vulnerability scanning with Trivy

### Workflow Steps
1. **Code Quality**: ESLint validation
2. **Type Safety**: TypeScript compilation check
3. **Build Verification**: Ensures successful build output
4. **Security Scan**: Vulnerability detection
5. **Artifact Upload**: Stores build artifacts for review

## Available Scripts

- `npm run test` - Run complete test suite (lint + type-check + build)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run type-check` - Run TypeScript compiler check
- `npm run build` - Build the project
- `npm run dev` - Start development server
- `npm run preview` - Preview production build

## Development Workflow

1. Make your changes
2. Run `npm run test` to validate locally
3. Commit your changes (pre-commit hooks will run automatically)
4. Push to create a pull request
5. GitHub Actions will run the full test suite
6. Merge only after all checks pass

## Build Requirements

The build process must:
- Pass ESLint validation (no errors or warnings)
- Pass TypeScript compilation
- Generate a valid `dist/` directory with `index.html`
- Complete without errors

## Security

- Vulnerability scanning runs on every PR
- Dependencies are automatically checked for known security issues
- Build artifacts are retained for 7 days for debugging

## Troubleshooting

### Pre-commit hooks failing
```bash
# Skip hooks temporarily (not recommended)
git commit --no-verify

# Fix issues and try again
npm run lint:fix
npm run test
```

### Build failures
```bash
# Check for TypeScript errors
npm run type-check

# Check for ESLint issues
npm run lint

# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```