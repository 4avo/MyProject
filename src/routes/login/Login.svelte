<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "./schema";
    import {
     type SuperValidated,
     type Infer,
     superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    
    export let data: SuperValidated<Infer<FormSchema>>;
    
    const form = superForm(data, {
     validators: zodClient(formSchema),
    });
    
    const { form: formData, enhance } = form;
   </script>

    <form method="POST" use:enhance>
        <!-- email field -->
        <Form.Field {form} name="email">
         <Form.Control let:attrs>
          <Form.Label class="text-white">Email</Form.Label>
          <Input {...attrs} bind:value={$formData.email} type="email" />
         </Form.Control>
         <Form.Description>Plese enter your Username</Form.Description>
         <Form.FieldErrors />
        </Form.Field>

    <!-- password field -->
    <Form.Field {form} name="password">
        <Form.Control let:attrs>
         <Form.Label class="text-white">Password</Form.Label>
         <Input {...attrs} bind:value={$formData.password} type="password"/>
        </Form.Control>
        <Form.Description>Please enter your password</Form.Description>
        <Form.FieldErrors />
       </Form.Field>

    <Form.Button class="w-full">Login to your MatchPlus Account</Form.Button>
   </form>