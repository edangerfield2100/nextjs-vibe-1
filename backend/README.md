# Menu Service - Spring Boot Application

This is a Spring Boot application built with Java 21 that provides a REST API for managing menu options.

## Project Structure

```
backend/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── example/
│       │           └── menuservice/
│       │               ├── controllers/     # REST Controllers
│       │               ├── services/        # Business Logic Services
│       │               ├── models/          # Data Models
│       │               └── MenuServiceApplication.java
│       └── resources/
│           └── application.properties
└── pom.xml
```

## API Endpoints

### Get All Menu Options

- **URL**: `GET /api/menu/options`
- **Description**: Retrieves all menu options
- **Response**: List of MenuOption objects

### Get Menu Options by Type

- **URL**: `GET /api/menu/options/type/{type}`
- **Description**: Retrieves menu options filtered by type
- **Parameters**:
  - `type` (path parameter): The type of menu option (e.g., PIZZA, SALAD, BURGER, BEVERAGE, DESSERT)
- **Response**: List of MenuOption objects

### Get Menu Option by ID

- **URL**: `GET /api/menu/options/{id}`
- **Description**: Retrieves a specific menu option by ID
- **Parameters**:
  - `id` (path parameter): The ID of the menu option
- **Response**: MenuOption object

## MenuOption Model

```json
{
  "id": 1,
  "name": "Margherita Pizza",
  "description": "Fresh tomatoes, mozzarella, basil",
  "type": "PIZZA",
  "price": 12.99,
  "available": true
}
```

## Running the Application

1. Make sure you have Java 21 installed
2. Navigate to the backend directory
3. Run the application:

   ```bash
   ./mvnw spring-boot:run
   ```

   Or on Windows:

   ```bash
   mvnw.cmd spring-boot:run
   ```

4. The application will start on `http://localhost:8080`

## Testing the API

You can test the API using curl or any REST client:

```bash
# Get all menu options
curl http://localhost:8080/api/menu/options

# Get menu options by type
curl http://localhost:8080/api/menu/options/type/PIZZA

# Get menu option by ID
curl http://localhost:8080/api/menu/options/1
```

## Dependencies

- Spring Boot 3.2.0
- Spring Boot Starter Web
- Spring Boot Starter Validation
- Spring Boot Starter Test
- Java 21
