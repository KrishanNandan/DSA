class ValidationError extends Error {
  constructor(message,name) {
    super(message); // Pass message to the parent Error class
    this.name = name; // Set the custom name
  }
}

// Usage
throw new ValidationError("Invalid email address!","ValidationError");
