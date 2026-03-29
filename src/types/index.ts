export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  external?: boolean;
  comingSoon?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceType?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
