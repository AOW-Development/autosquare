import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // apiVersion will use the default version that comes with stripe@19.3.0
  typescript: true,
});

export default stripe;