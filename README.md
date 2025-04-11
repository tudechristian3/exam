# Laravel React Application

This is a Laravel application with React frontend, using Inertia.js for seamless integration between the backend and frontend.

## Prerequisites

- PHP >= 8.1
- Node.js >= 18.x
- Composer
- MySQL/MariaDB
- Git

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tude-exam
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Configure your database in the `.env` file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

7. Run database migrations:
```bash
php artisan migrate
```

8. (Optional) Seed the database with sample data:
```bash
php artisan db:seed
```

## Development

1. Start the Laravel development server:
```bash
php artisan serve
```

2. In a separate terminal, start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8000`

## Building for Production

1. Build the frontend assets:
```bash
npm run build
```

2. Optimize the application:
```bash
php artisan optimize
```

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the frontend assets for production
- `npm run format` - Format code using Prettier
- `npm run lint` - Run ESLint to check code quality
- `npm run types` - Check TypeScript types

## Testing

Run the PHPUnit tests:
```bash
php artisan test
```

## Code Style

This project uses:
- Prettier for code formatting
- ESLint for code linting
- TypeScript for type checking

Run the following commands to ensure code quality:
```bash
npm run format
npm run lint
npm run types
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run the tests and ensure they pass
4. Submit a pull request

## License

[Your License Here] 