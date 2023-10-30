---
author: Matt Davis
title: Deploy a Static Site to Render in Ten Minutes
created: 2023-10-30T15:17:01-07:00
modified: 2023-10-30T15:31:43-07:00
tags:
  - render
  - nextjs
  - how-to
---

# Deploy a Static Site to Render in Ten Minutes

In today's fast-paced development world, deploying a static site shouldn't be a complex task. With the right tools and a step-by-step guide, you can get your site up and running on Render in just ten minutes. In this tutorial, we'll show you how to deploy a static site using Next.js v13 for static site generation and style it with Tailwind CSS.

## Prerequisites

Before we dive into the deployment process, make sure you have the following set up:

- Node.js and npm installed on your local machine.
- A Next.js v13 project ready for deployment.
- Basic knowledge of Tailwind CSS for styling.

## Step 1: Install Render CLI

To deploy your site to Render, you'll need the Render CLI. Install it globally by running:

```bash
npm install -g @render/cli
```

## Step 2: Create a Render Account

If you don't already have a Render account, sign up at [Render.com](https://www.render.com/).

## Step 3: Configure Your Next.js Project

Make sure your Next.js project is properly configured. Ensure you have a `package.json` file with the necessary dependencies and scripts. You can create a new Next.js project using the following command:

```bash
npx create-next-app my-nextjs-site
```

## Step 4: Add Tailwind CSS

Tailwind CSS makes styling your site a breeze. Install it in your project:

```bash
npm install tailwindcss
```


Then, set up Tailwind CSS by running:

```bash
npx tailwindcss init -p
```

This will generate a `tailwind.config.js` file. Customize it to suit your styling needs.

## Step 5: Build Your Site

Generate a production-ready build of your site using Next.js:

```bash
npm run build
```

## Step 6: Deploy to Render

Now comes the exciting part. Deploy your site to Render using the Render CLI:

```bash
render deploy
```

Follow the prompts, and Render will automatically detect your project settings and deploy your site.

## Step 7: Configure Your Domain

If you have a custom domain, you can easily configure it in the Render dashboard. Just add your domain and follow the DNS setup instructions.

## Step 8: Celebrate!

That's it! In just ten minutes, you've successfully deployed your static site to Render. Now, anyone can access your site on the web.

## Conclusion

Deploying a static site to Render is a straightforward process that allows you to focus on building your site, not managing servers. Next.js v13 and Tailwind CSS make development and styling a breeze, while Render takes care of the deployment magic.

Now you're ready to share your site with the world. Happy coding!
