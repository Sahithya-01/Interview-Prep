````markdown
# GraphQL Crash Course Notes

## What is GraphQL?

### Query Language:

- The "QL" in GraphQL stands for "Query Language."
- A syntax to query a server for requesting or mutating data.

### Comparison with REST APIs:

- REST is an architectural style, while GraphQL is an actual query language with defined syntax and rules.
- GraphQL still uses HTTP requests but allows more flexibility in controlling what data is fetched or mutated.

---

## Drawbacks of REST APIs

### Over-fetching:

- Receiving more data than needed.
- **Example**:
  - REST endpoint: `/courses` returns all courses.
  - Each course object contains fields like `id`, `title`, `author`, `price`, etc.
  - Only `id`, `title`, and `thumbnail` are needed, but all fields are returned.

### Under-fetching:

- Not receiving enough data in a single request.
- **Example**:
  - REST endpoint: `/courses/:id` returns a single course.
  - To fetch additional details (e.g., author's other courses), multiple requests to different endpoints are required.

---

## Advantages of GraphQL

### Single Endpoint:

- GraphQL uses a single endpoint (e.g., `/graphql`) for all requests.

### Precise Data Fetching:

- Queries specify exactly what data is needed, avoiding over-fetching.
- **Example**:
  ```graphql
  {
    courses {
      id
      title
      thumbnail
    }
  }
  ```
````

**Response**:

```json
{
  "courses": [
    {
      "id": 1,
      "title": "Course 1",
      "thumbnail": "url1"
    },
    {
      "id": 2,
      "title": "Course 2",
      "thumbnail": "url2"
    }
  ]
}
```

### Nested Queries:

- Fetch related data in a single request.
- **Example**:
  ```graphql
  {
    course(id: 1) {
      id
      title
      author {
        name
        courses {
          id
          title
          thumbnail
        }
      }
    }
  }
  ```
  **Response**:
  ```json
  {
    "course": {
      "id": 1,
      "title": "Course 1",
      "author": {
        "name": "Author 1",
        "courses": [
          {
            "id": 2,
            "title": "Course 2",
            "thumbnail": "url2"
          }
        ]
      }
    }
  }
  ```

---

## GraphQL Operations

### Queries:

- Retrieve data from the server.

### Mutations:

- Add, update, or delete data.
- **Example**:
  ```graphql
  mutation {
    addCourse(title: "New Course") {
      id
      title
    }
  }
  ```
  **Response**:
  ```json
  {
    "addCourse": {
      "id": 3,
      "title": "New Course"
    }
  }
  ```

---

## Tools Used

### Apollo Server:

- To build a GraphQL server.

### Apollo Explorer:

- A browser-based tool to test GraphQL queries (like Postman for REST).

```

```

Here are your notes in markdown format, based on the video transcript:

````markdown
# GraphQL with Apollo Explorer

## Overview

- **Apollo Explorer** is a tool to send test queries to a GraphQL server and view responses.
- Similar to **Postman** for REST APIs, but designed specifically for GraphQL.
- Allows you to test and sync queries as you would in a frontend application without needing to actually build a frontend.

## Making Queries in Apollo Explorer

1. **Query Syntax:**

   - To start a query, use the keyword `query` followed by a name (optional), and then specify the data fields you want.
   - Example:
     ```graphql
     query reviewsQuery {
       reviews {
         rating
       }
     }
     ```

2. **Specifying Fields:**

   - Unlike REST APIs, you can specify exactly which fields you want from a resource.
   - Example:
     ```graphql
     query {
       reviews {
         rating
         content
         id
       }
     }
     ```
   - The response will include only the specified fields for each review.

3. **Navigating the Graph:**

   - In GraphQL, you can navigate a connected graph of resources.
   - Example: Fetching related data from a connected resource like an author:
     ```graphql
     query {
       reviews {
         rating
         content
         author {
           name
         }
       }
     }
     ```
   - This query fetches reviews, and for each review, it also retrieves the author's name.

4. **Nested Queries:**

   - GraphQL allows nested queries where related data can be fetched in a single request.
   - Example: Fetching a game related to each review:
     ```graphql
     query {
       reviews {
         rating
         game {
           title
           platform
         }
       }
     }
     ```
   - Response:
     ```json
     {
       "reviews": [
         {
           "rating": 5,
           "game": {
             "title": "Game 1",
             "platform": ["PC", "Xbox"]
           }
         }
       ]
     }
     ```

5. **Graph Structure:**
   - GraphQL API is essentially a graph, with connected data resources.
   - For example, reviews, authors, and games are connected, and you can jump into the graph at any entry point (e.g., reviews or games) and navigate through related data.

## Working with Apollo Server

- To create a GraphQL API, you'll use **Apollo Server** with **Node.js**.
- **Apollo Server** is one of the libraries used to quickly set up a GraphQL server.

## Mutations in GraphQL

- In addition to querying data, you can use **mutations** to modify the data.
- Example:
  ```graphql
  mutation {
    addGame(title: "New Game", platform: "PC") {
      id
      title
    }
  }
  ```
````

- This will add a new game and return the `id` and `title` of the newly created game.

## Summary

- **GraphQL** allows precise querying of data and avoids over-fetching.
- You can navigate a connected graph to fetch related data in a single request.
- Apollo Explorer is a great tool for testing GraphQL queries and mutations.
- The server can expose multiple resources (e.g., reviews, authors, games) that can be queried and mutated.

```

```
