# Instant SaaS

This is a starter template for building SaaS applications using Next.js with support for Supabase authentication, Stripe payments and a dashboard for logged-in users.

## Features

- User authentication with Supabase.
- Subscription management with Stripe.
- Responsive design with Tailwind CSS.
- Dashboard for subscribed users.
- Form handling with React Hook Form and Zod.

## Tech Stack

- Next.js
- Supabase
- Stripe
- Tailwind CSS with daisyUI

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- A **Supabase** account
- A **Stripe** account
- **Supabase CLI**
- **Stripe CLI**

### Running Locally

Follow these steps to set up and run the project locally:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**

   Copy the `.env.example` file to `.env.local` and update it with your credentials:

   ```bash
   cp .env.example .env.local
   ```

3. **Set up Supabase**

   ```bash
   supabase login
   supabase link
   supabase db push
   ```

   To regenerate TypeScript types, use the following command:

   ```bash
   supabase gen types --lang typescript --project-id <your-project-id> > supabase/database.types.ts
   ```

4. **Set Up Google OAuth**

   Configure Google OAuth in your Supabase project by following the [Supabase Google OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=client&queryGroups=framework&framework=nextjs#application-code-configuration).

5. **Set up Stripe**

   - Create a new product in Stripe and add pricing plans. Update the `Pricing` component in the codebase with the corresponding `priceId` values for each plan.
   - Add customer portal link in the `CustomerPortalButton` component.

6. **Run Stripe CLI to test subscriptions**

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

7. **Start the Development Server**

   ```bash
   npm run dev
   ```

### Deployment

To deploy the project, use a platform like **Vercel**.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License.
