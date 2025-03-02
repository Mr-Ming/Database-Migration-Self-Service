# Database Migration Self Service System
Database Migration Self Service System using TypeORM, no server required!

Run locally, no need to deploy on a server.

## 📌 Table of Contents
- [📦 Installation](#-installation)
- [⚙️ Setup](#️-setup)
- [🚨 Before Production Use](#️-before-production-use)
- [📖 List of PNPM Commands](#-list-of-pnpm-commands)
  - [See a list of migration commands](#see-a-list-of-migration-commands)
  - [Create a new migration file](#create-a-new-migration-file)
  - [Roll out all migration(s) that has not been executed](#roll-out-all-migrations-that-has-not-been-executed)
  - [Roll back the latest migration](#roll-back-the-latest-migration)
- [📜 Support](#-support)

## 📦 Installation
1. Clone the repo
2. Run `pnpm i`
3. Run any of the migration command in [package.json](https://github.com/Mr-Ming/Database-Migration-System/blob/main/package.json#L10-L14)

## ⚙️ Setup
1. Modify the .env file with your cred

## 🚨 Before Production Use
1. Remove the [Sample Migration File](https://github.com/Mr-Ming/Database-Migration-System/blob/main/src/database/migrations/1740875861789-Sample.ts)
2. Running any command would create a new table called `migrations` which TypeOrm uses to keep track of migrations thats been ran.
![typeorm-generated-table](https://github.com/Mr-Ming/Database-Migration-System/blob/main/documentation-assets/typeorm-generated-table.png)

## 📖 List of pnpm commands
### See a list of migration commands
Run `pnpm migration`
![pnpm-migration-screenshot](https://github.com/Mr-Ming/Database-Migration-System/blob/main/documentation-assets/pnpm-migration-screenshot.png)

### Create a new migration file
1. Run `pnpm migration:generate`.
![pnpm-create-screenshot](https://github.com/Mr-Ming/Database-Migration-System/blob/main/documentation-assets/pnpm-create-screenshot.png)
2. You can then edit that migration script.
3. Add a up() function which is used to rollout the migration.
4. Add a down() function which is used to rollback the migration.

### Roll out all migration(s) that has not been executed
Run `pnpm migration:up`
![pnpm-up-screenshot](https://github.com/Mr-Ming/Database-Migration-System/blob/main/documentation-assets/pnpm-up-screenshot.png)

### Roll back the latest migration
Run `pnpm migration:down`
![pnpm-down-screenshot](https://github.com/Mr-Ming/Database-Migration-System/blob/main/documentation-assets/pnpm-down-screenshot.png)

## 📜 Support
If you like this project and want to support it, you can buy me a coffee:

[![Buy Me a Coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20Me%20A%20Coffee&emoji=&slug=mingthedev&button_colour=FFDD00&font_colour=000000&font_family=Cookie)](https://buymeacoffee.com/mingthedev)

[PayPal](https://www.paypal.com/donate/?hosted_button_id=ZNX8TQ9DZBHY6)