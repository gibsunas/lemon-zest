// I want this to do the following:

// Automatic Postgres detection
// Automatic Redis detection
// Install Helmet
// Install health check
// Include docker file
// Type safe using typescript
// Swagger documentation
// deepthought protection
// gently wraps express but freely exposes it


// importance
// gently wrap express using typescript
// include docker file
// install health check
// automatic detection of pg and redis
//

import * as express from 'express';

export class Zest {
    constructor() {
        const app = express();

        app.get('/', (req, res) => res.json({ message: 'hello world' }));

        app.listen(3000, () => console.log('Listening on port 3000'));
    }
}


