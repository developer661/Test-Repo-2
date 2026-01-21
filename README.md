# Welcome Application

A beautiful web application that displays a "Welcome User!!" message. This project includes both implementations:

1. **React Frontend** - Modern TypeScript/React application with Vite
2. **Java Spring Boot Backend** - Maven-based server-side application

## Running the React Application (Default)

### Prerequisites
- Node.js 18+ and npm

### Commands
```bash
npm install
npm run dev
```

Access at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Running the Java Maven Application

### Prerequisites

- Java 17 or higher
- Maven 3.6+ (or use the included Maven wrapper)

## Project Structure

```
welcome-app/
├── pom.xml                          # Maven configuration
├── src/
│   └── main/
│       ├── java/
│       │   └── com/welcome/app/
│       │       ├── WelcomeApplication.java      # Main Spring Boot application
│       │       └── controller/
│       │           └── WelcomeController.java    # Web controller
│       └── resources/
│           ├── application.properties            # Application configuration
│           └── templates/
│               └── welcome.html                  # Thymeleaf template
└── README.md
```

## Building the Application

### Using Maven Wrapper (Recommended)

If you have the Maven wrapper configured:

```bash
./mvnw clean package
```

### Using Installed Maven

```bash
mvn clean package
```

## Running the Application

### Run directly with Maven

```bash
mvn spring-boot:run
```

### Run the built JAR

```bash
java -jar target/welcome-app-1.0.0.jar
```

## Accessing the Application

Once the application is running, open your browser and navigate to:

```
http://localhost:8080
```

You should see a beautiful welcome page with:
- A prominent "Welcome User!!" heading
- Animated icons and interactive elements
- Three feature cards (Innovative, Connected, Supported)
- Responsive design that works on all devices

## Configuration

The application runs on port 8080 by default. You can change this in `src/main/resources/application.properties`:

```properties
server.port=8080
```

## Technologies Used

- **Java 17**: Modern Java version
- **Spring Boot 3.2.1**: Web framework
- **Thymeleaf**: Template engine for server-side rendering
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Maven**: Build and dependency management

## Features

- Modern, responsive UI design
- Smooth animations and transitions
- Clean component architecture
- Production-ready Spring Boot setup
- Hot reload support with Spring Boot DevTools

## Development

The application includes Spring Boot DevTools for automatic restart during development. Simply modify your Java files and the application will automatically restart.

## Building for Production

To create a production-ready JAR:

```bash
mvn clean package -DskipTests
```

The JAR file will be created in the `target/` directory.
