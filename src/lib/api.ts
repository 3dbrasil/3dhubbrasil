const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

interface ApiOptions {
  method?: string;
  body?: unknown;
}

async function fetchApi<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body } = options;
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP error ${response.status}`);
  }

  return response.json();
}

// Categories API
export const categoriesApi = {
  getAll: () => fetchApi<any[]>('/categories'),
  getById: (id: number) => fetchApi<any>(`/categories/${id}`),
  create: (data: { name: string; icon?: string; isLinkList?: boolean; order?: number }) =>
    fetchApi<any>('/categories', { method: 'POST', body: data }),
  update: (id: number, data: { name?: string; icon?: string; isLinkList?: boolean; order?: number }) =>
    fetchApi<any>(`/categories/${id}`, { method: 'PUT', body: data }),
  delete: (id: number) => fetchApi<any>(`/categories/${id}`, { method: 'DELETE' }),
};

// Items API
export const itemsApi = {
  getAll: () => fetchApi<any[]>('/items'),
  getByCategory: (categoryId: number) => fetchApi<any[]>(`/categories/${categoryId}/items`),
  create: (data: { categoryId: number; name: string; link: string; desc?: string; type?: string; order?: number }) =>
    fetchApi<any>('/items', { method: 'POST', body: data }),
  update: (id: number, data: { name?: string; link?: string; desc?: string; type?: string; order?: number }) =>
    fetchApi<any>(`/items/${id}`, { method: 'PUT', body: data }),
  delete: (id: number) => fetchApi<any>(`/items/${id}`, { method: 'DELETE' }),
};

// Seed API
export const seedApi = {
  seed: () => fetchApi<any>('/seed', { method: 'POST' }),
};
