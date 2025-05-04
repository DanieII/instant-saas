# Instant SaaS

This is a starter template for building SaaS applications using Next.js with support for Supabase authentication, Stripe payments and a dashboard for logged-in users.

## Features

- User authentication with Supabase.
- Subscription management with Stripe.
- Responsive design with Tailwind CSS.
- Dashboard for logged-in users.

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
- **Stripe CLI** for webhook testing

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DanieII/instant-saas
   cd instant-saas
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env.local` and update it with your credentials:

   ```bash
   cp .env.example .env.local
   ```

4. Apply the database migration for subscriptions:

   ```bash
   supabase db push
   ```

   This will create the necessary `subscriptions` table in your Supabase database.

5. [Set up Google OAuth](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=client&queryGroups=framework&framework=nextjs#application-code-configuration)

6. Create a new Stripe product and add the prices in the Pricing component

7. Run the Stripe CLI to listen for webhook events:

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

### Deployment

To deploy the project, use a platform like **Vercel**.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License.
