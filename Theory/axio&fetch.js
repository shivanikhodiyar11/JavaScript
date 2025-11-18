fetch("https://api.example.com/data")
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

// ---------------------------------------------------------------------
axios.get("https://api.example.com/data")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));


// It simplifies the process of sending asynchronous HTTP requests.
// offers a more user-friendly API with features like interceptors, automatic JSON data transformation, error handling, and support for older browsers. 

// Promise-Based: Axios uses Promises, making it easier to handle asynchronous requests with modern JavaScript features like async/await.
// Automatic JSON Data Transformation:
// Request and Response Timeout:
// Cancel Requests:
// Error Handling:
// Supports All HTTP Methods:
// Cross-Site Request Forgery (CSRF) Protection: 

// Using Interceptors
// Interceptors allow you to perform actions or modifications before a request is sent or after a response is received: