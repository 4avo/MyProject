import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async ({ locals }) => {
  // Redirect logged-in users to the main page
  if (locals.user) {
      throw redirect(303, '/'); // Adjust '/' to your main page route if needed
  }

  // Existing form logic
  return {
      form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
    default: async (event) => {
      const form = await superValidate(event, zod(formSchema));
      if (!form.valid) {
        return fail(400, {
          form,
        });
      }
      const supabase = event.locals.supabase;
      const {email, password} = form.data;
      const {error} = await supabase.auth.signInWithPassword({email, password})
      if (error) {
        console.log(error)
        return setError(form, "password", "Invalid email or password.")
      } else {
        redirect(303, "/")
      }
      return {
        form,
      };
    },
  };