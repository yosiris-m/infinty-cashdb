# family-cash

Budget Manager and Expense Tracker app.

## Features

- Track and categorize transactions
- Generate reports
- Create budgets

## Designs

![Designs](./img/designs.png)

## Architecture

![Architecture](./img/architecture.png)

## API Doc

The API documentation is defined using OpenAPI v3.0. More info [here](./api_doc.yml).

## Environment Variables

| Name         | Description                              | Default value                                          |
| ------------ | ---------------------------------------- | ------------------------------------------------------ |
| PORT         | The HTTP server will listen in this port | 3000                                                   |
| DATABASE_URL | The connection string for the data base  | postgresql://postgres:123456@localhost:5432/familycash |
