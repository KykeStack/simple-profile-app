import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_TOKEN
  );


function supabaseClient() {
    return supabase
}

export default supabaseClient;