import { createClient } from "@supabase/supabase-js";
import { createResource, For } from "solid-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_TOKEN
  );

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  return data;
}

function Countries() {
  const [countries] = createResource(getCountries);

  return (
    <ul>
      <For each={countries()}>{(country) => <li>{country.name}</li>}</For>
    </ul>
  );
}

export default Countries;