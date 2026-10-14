export const projects = [
  {
    id: "01",
    title: "Campus Second-hand Marketplace",
    date: "May 2026",
    icon: "marketplace",
    description:
      "A full-stack marketplace platform for students to buy, sell, search, and manage second-hand items within the campus community.",
    bullets: [
      "JWT-based authentication and role-based authorization using Spring Security",
      "10+ RESTful APIs integrated with a React.js frontend",
      "3-layer architecture (Controller, Service, Repository) for modularity",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "REST APIs", "JWT", "MySQL", "Maven"],
    liveUrl: "https://revora-alpha-five.vercel.app/",
    githubUrl: "https://github.com/Ghost-Ak24",
  },
  {
    id: "02",
    title: "Real-Time Chat Application",
    date: "Apr 2026",
    icon: "chat",
    description:
      "A full-stack real-time chat application supporting 100+ concurrent connections with instant, bidirectional messaging.",
    bullets: [
      "Asynchronous bidirectional messaging via WebSocket endpoints and Spring Messaging",
      "Instant message broadcasting built on STOMP and SockJS",
      "Responsive React.js frontend for seamless real-time communication",
    ],
    tech: ["Java", "Spring Boot", "WebSocket", "STOMP", "SockJS", "Spring Messaging", "React.js"],
    liveUrl: null,
    githubUrl: "https://github.com/Ghost-Ak24",
  },
  {
    id: "03",
    title: "Weather Monitoring Web App",
    date: "2025",
    icon: "weather",
    description:
      "A responsive weather lookup app that pulls live conditions and forecasts from the OpenWeather API.",
    bullets: [
      "Live weather data fetched from the OpenWeather API",
      "Clean, responsive UI built with vanilla HTML, CSS and JavaScript",
      "Location-based search with clear current-conditions display",
    ],
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    liveUrl: "https://weatherapp-psi-taupe.vercel.app/",
    githubUrl: "https://github.com/Ghost-Ak24",
  },
  {
    id: "04",
    title: "Employee Management System",
    date: "2025",
    icon: "employees",
    description:
      "A management system for handling employee records, roles, and workflows on a Spring Boot backend.",
    bullets: [
      "CRUD operations for employee records exposed via REST APIs",
      "React.js frontend consuming a Spring Boot + MySQL backend",
      "Structured backend for clean separation of concerns",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "05",
    title: "Smart Irrigation System",
    date: "Mar 2025 – Apr 2025",
    icon: "irrigation",
    description:
      "An IoT-based irrigation system that automates watering using live soil-moisture thresholds.",
    bullets: [
      "ESP32 + Blynk IoT platform for remote monitoring and control",
      "Automated pump operation: ON below 30% moisture, OFF at 80%",
      "DHT11 temperature/humidity and soil-moisture sensors with a relay-controlled pump",
    ],
    tech: ["ESP32", "Blynk IoT", "DHT11", "Soil Moisture Sensor", "Relay Module"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "06",
    title: "8051 Water Level Controller",
    date: "2024",
    icon: "circuit",
    description:
      "An embedded water-level controller built around the 8051 microcontroller for automatic pump control.",
    bullets: [
      "Sensor-driven water-level detection at multiple tank thresholds",
      "Automatic motor/pump switching logic written in Embedded C",
      "Low-level hardware interfacing with the 8051 microcontroller",
    ],
    tech: ["8051", "Embedded C", "Microcontroller", "Sensors"],
    liveUrl: null,
    githubUrl: null,
  },
];
