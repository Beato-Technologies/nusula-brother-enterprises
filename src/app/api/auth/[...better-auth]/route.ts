import { betterAuth } from 'better-auth';
import { supabase } from '@/lib/supabase'; // Import the Supabase client
import nodemailer from 'nodemailer';
import { DBAdapter } from 'better-auth'; // Use DBAdapter which is the correct export
import { User as SupabaseUser } from '@supabase/supabase-js'; // Alias Supabase User type

// Configure Nodemailer transporter with mock SMTP details
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use 'true' if your SMTP server uses SSL/TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Conceptual Supabase Adapter for BetterAuth
const SupabaseAdapter: DBAdapter = {
  async create(profile) {
    // When better-auth tries to create a user, we'll use Supabase Auth's signup
    // Note: Supabase Auth handles its own user table (auth.users)
    const { data, error } = await supabase.auth.signUp({
      email: profile.email,
      password: profile.password, // Assuming profile contains password for email provider
    });

    if (error) {
      throw new Error(`Supabase createUser error: ${error.message}`);
    }
    if (!data.user) {
      throw new Error('Supabase createUser: No user returned');
    }

    // Optionally, insert into your public.users table if you have additional fields like role_id
    // For now, we'll assume the role_id is handled by the initial SQL setup in auth.users
    // If you need to store more profile data, you'd do it here:
    // await supabase.from('public.users').insert({ id: data.user.id, email: data.user.email });

    return {
      id: data.user.id,
      email: data.user.email,
      emailVerified: data.user.email_confirmed_at ? new Date(data.user.email_confirmed_at) : null,
      // Map other properties better-auth expects from a User
      name: profile.name || null, // Assuming profile might have a name
      image: profile.image || null, // Assuming profile might have an image
    };
  },

  async getUser(id: string) {
    // Note: For server-side operations, consider using a Supabase Admin client
    // with a service role key to bypass RLS if necessary.
    const { data: { user }, error } = await supabase.auth.admin.getUserById(id);
    if (error) {
      console.error('Supabase getUser error:', error);
      return null;
    }
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      emailVerified: user.email_confirmed_at ? new Date(user.email_confirmed_at) : null,
      name: user.user_metadata?.name || null, // Assuming name might be in user_metadata
      image: user.user_metadata?.image || null, // Assuming image might be in user_metadata
    };
  },

  async getUserByEmail(email: string) {
    // Supabase Auth's admin client doesn't have a direct 'getUserByEmail' method.
    // You would typically query your public.users table if you store emails there,
    // or rely on better-auth's internal logic if it doesn't need this from the adapter.
    // For a full implementation, you might need to query auth.users directly if allowed,
    // or query your public.users table.
    console.warn('SupabaseAdapter: getUserByEmail requires custom implementation for Supabase.');
    // Example if you have a public.users table with email:
    // const { data, error } = await supabase.from('public.users').select('*').eq('email', email).single();
    // if (error || !data) return null;
    // return { id: data.id, email: data.email, ... };
    return null;
  },

  // Placeholder for other required Adapter methods.
  // You MUST implement all methods defined by the 'better-auth' Adapter interface.
  // Consult better-auth documentation for the full list and their signatures.

  // Example: update user
  async updateUser(user) {
    const { data, error } = await supabase.auth.admin.updateUserById(user.id, {
      email: user.email,
      email_confirm: user.emailVerified ? true : false,
      user_metadata: {
        name: user.name,
        image: user.image,
      },
    });
    if (error) {
      throw new Error(`Supabase updateUser error: ${error.message}`);
    }
    if (!data.user) {
      throw new Error('Supabase updateUser: No user returned');
    }
    return {
      id: data.user.id,
      email: data.user.email,
      emailVerified: data.user.email_confirmed_at ? new Date(data.user.email_confirmed_at) : null,
      name: data.user.user_metadata?.name || null,
      image: data.user.user_metadata?.image || null,
    };
  },

  // Placeholder for session methods. BetterAuth might manage sessions internally or expect adapter to store them.
  // If better-auth expects a database lookup for sessions, you'd need a 'sessions' table in Supabase.
  async createSession(session: any) {
    console.warn('SupabaseAdapter: createSession requires custom implementation based on better-auth session strategy.');
    return session; // Return the session as is for now
  },
  async getSessionAndUser(sessionToken: string) {
    console.warn('SupabaseAdapter: getSessionAndUser requires custom implementation based on better-auth session strategy.');
    return null;
  },
  async updateSession(session: any) {
    console.warn('SupabaseAdapter: updateSession requires custom implementation based on better-auth session strategy.');
    return session;
  },
  async deleteSession(sessionToken: string) {
    console.warn('SupabaseAdapter: deleteSession requires custom implementation based on better-auth session strategy.');
  },

  // Placeholder for account linking methods
  async linkAccount(account: any) {
    console.warn('SupabaseAdapter: linkAccount requires custom implementation.');
  },
  async unlinkAccount(account: any) {
    console.warn('SupabaseAdapter: unlinkAccount requires custom implementation.');
  },

  // Placeholder for verification token methods
  async createVerificationToken(token: any) {
    console.warn('SupabaseAdapter: createVerificationToken requires custom implementation.');
    return token;
  },
  async useVerificationToken(identifier: any) {
    console.warn('SupabaseAdapter: useVerificationToken requires custom implementation.');
    return null;
  },
};

const auth = betterAuth({
  providers: {
    email: {
      sendVerificationRequest: async ({ identifier, url }) => {
        const { email } = identifier;

        try {
          await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Verify your email for Nusula Brother Enterprises CMS',
            html: `<p>Click the link below to verify your email:</p><p><a href="${url}">${url}</a></p>`,
          });
          console.log(`Verification email sent to ${email}`);
        } catch (error) {
          console.error(`Error sending verification email to ${email}:`, error);
          throw new Error('Failed to send verification email.');
        }
      },
    },
  },
  adapter: SupabaseAdapter, // Use our custom adapter
  secret: process.env.AUTH_SECRET,
});

export const GET = auth.handler.GET;
export const POST = auth.handler.POST;
