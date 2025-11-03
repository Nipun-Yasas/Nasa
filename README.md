# NASA APOD Project - Next.js

This is a Next.js project that displays NASA's Astronomy Picture of the Day (APOD).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, create a `.env.local` file in the root directory and add your NASA API key:

```
NEXT_PUBLIC_NASA_API_KEY=your_api_key_here
```

You can get a free API key from [NASA's API portal](https://api.nasa.gov/).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Displays NASA's Astronomy Picture of the Day
- Caches data in localStorage
- Responsive design
- Modal sidebar with detailed information

## Tech Stack

- Next.js 14
- React 18
- Font Awesome icons
