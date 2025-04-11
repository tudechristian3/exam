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
git clone https://github.com/tudechristian3/exam.git
cd exam
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

3. Optimize the application:
```bash
php artisan optimize
```

## Testing

Run the PHPUnit tests:
```bash
php artisan test
```
The application will be available at `http://localhost:8000`


