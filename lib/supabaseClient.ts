export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pmdpzdyzzhsdrakiwdds.supabase.co';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const defaultHeaders = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

function getHeaders(jwt?: string | null) {
  if (jwt) {
    return {
      ...defaultHeaders,
      Authorization: `Bearer ${jwt}`,
    };
  }
  return defaultHeaders;
}

export async function supabaseLogin(email: string, password: string) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error_description || error.msg || 'Login failed');
  }

  return response.json();
}

export async function supabaseGet(table: string, query: string, jwt?: string | null) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(jwt),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${table}`);
  }

  return response.json();
}

export async function supabasePost(table: string, body: Record<string, unknown>, jwt: string | null) {
  const url = `${SUPABASE_URL}/rest/v1/${table}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...getHeaders(jwt),
      Prefer: 'return=representation',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || `Failed to create in ${table}`);
  }

  return response.json();
}

export async function supabasePatch(table: string, query: string, body: Record<string, unknown>, jwt: string | null) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: getHeaders(jwt),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || `Failed to update ${table}`);
  }

  // If Prefer: return=representation is needed, we could add it.
  // PATCH usually returns 204 No Content unless Prefer is set.
  if (response.status === 204) {
    return null;
  }
  
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function supabaseDelete(table: string, query: string, jwt: string | null) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: getHeaders(jwt),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || `Failed to delete from ${table}`);
  }

  return true;
}

export async function uploadImage(fileName: string, file: File, jwt: string | null) {
  const url = `${SUPABASE_URL}/storage/v1/object/food-menu/${fileName}`;
  const headers: Record<string, string> = {
    apikey: SUPABASE_ANON_KEY,
  };
  
  if (jwt) {
    headers['Authorization'] = `Bearer ${jwt}`;
  } else {
    headers['Authorization'] = `Bearer ${SUPABASE_ANON_KEY}`;
  }

  // We do NOT set Content-Type to application/json here, we let the browser set it based on the File or we set it to the file's type.
  headers['Content-Type'] = file.type;

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: file, // Send the file directly
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Image upload failed');
  }

  return response.json();
}

export async function deleteImage(fileName: string, jwt: string | null) {
  const url = `${SUPABASE_URL}/storage/v1/object/food-menu/${fileName}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: getHeaders(jwt),
  });

  if (!response.ok) {
    throw new Error('Failed to delete image');
  }

  return true;
}

export function getPublicImageUrl(fileName: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/food-menu/${fileName}`;
}
