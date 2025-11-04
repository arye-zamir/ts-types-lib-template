# ts-types-lib-template

A template for building TypeScript types-only libraries. This project is designed to be a starting point for creating libraries that provide only type definitions without any runtime code, making it ideal for type safety in larger TypeScript projects.

## Features

- **Types-only output**: Uses `emitDeclarationOnly` to generate only `.d.ts` files
- **Modern TypeScript**: Configured with strictest type-checking settings
- **ESM**: Full ES module support
- **Quality tools**: ESLint v9, Prettier, EditorConfig
- **CI/CD ready**: GitHub Actions workflow included
- **Comprehensive examples**: Nullable, Optional, Maybe, Branded types, and Result patterns

## Prerequisites

- Node.js (v22.11.0 or higher)
- pnpm

## Using This Template

### 1. Create Your Repository

Click the "Use this template" button on GitHub, or clone it:

```bash
git clone https://github.com/arye-zamir/ts-types-lib-template.git my-types-library
cd my-types-library
```

### 2. Customize for Your Project

Update the following files:

**package.json**:

- Change `"name"` from `"my-types-library"` to your library name
- Update `"repository"` with your GitHub URL
- Modify `"author"` and `"maintainers"` as needed
- Update `"description"` to describe your library

**README.md**:

- Replace the title and description
- Update installation instructions with your package name
- Document your custom types

**LICENSE.md** (if needed):

- Update the copyright year and author name

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Add Your Types

Edit or replace the example types in `src/types/data.ts` with your own type definitions.

### 5. Build and Test

```bash
# Build the type definitions
pnpm run build

# Check formatting
pnpm run format:check

# Run linter
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix
```

## Usage Example

After building and publishing your types library, consumers can use it like this:

```typescript
// Install your package
// npm install your-types-library

// Import types
import type { Nullable, Result, UUID } from 'your-types-library';

// Use the types
function getUserById(id: UUID): Result<User, Error> {
  // Implementation
}

const userName: Nullable<string> = user?.name ?? null;
```

## Example Types Included

This template includes several common type patterns:

### Nullable Types

```typescript
type Nullable<T> = T | null;
type NullString = Nullable<string>;
```

### Optional Types

```typescript
type Optional<T> = T | undefined;
type OptionalNumber = Optional<number>;
```

### Maybe Types

```typescript
type Maybe<T> = T | null | undefined;
type MaybeBoolean = Maybe<boolean>;
```

### Branded Types (Nominal Typing)

```typescript
type UUID = Brand<string, 'UUID'>;
type Email = Brand<string, 'Email'>;
type UserId = Brand<number, 'UserId'>;
```

### Result Types

```typescript
type Result<T, E = Error> = { success: true; value: T } | { success: false; error: E };
```

## Available Scripts

- **`pnpm run build`**: Build type definitions
- **`pnpm run clean`**: Remove the dist directory
- **`pnpm run lint`**: Run ESLint
- **`pnpm run lint:fix`**: Fix ESLint issues automatically
- **`pnpm run format`**: Format code with Prettier
- **`pnpm run format:check`**: Check code formatting

## Project Structure

```
.
├── src/
│   ├── index.ts              # Main export file
│   └── types/
│       ├── index.ts          # Type exports
│       └── data.ts           # Type definitions
├── dist/                     # Generated .d.ts files (gitignored)
├── scripts/
│   └── clean-dist.js         # Build cleanup script
├── .github/
│   └── workflows/
│       └── ci.yml            # CI/CD workflow
├── tsconfig.json             # TypeScript configuration
├── eslint.config.js          # ESLint v9 configuration
├── .editorconfig             # Editor configuration
├── .nvmrc                    # Node version
└── package.json              # Package configuration
```

## TypeScript Configuration

This template uses the strictest TypeScript settings:

- `strict: true`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUncheckedIndexedAccess: true`
- And many more...

See `tsconfig.json` for the complete configuration.

## CI/CD

The included GitHub Actions workflow automatically:

- Runs on PRs and pushes to main/master
- Checks code formatting
- Runs linting
- Builds the types
- Verifies build output

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
