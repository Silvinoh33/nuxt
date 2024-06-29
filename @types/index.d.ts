export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: Date;
  two_factor_secret?: string;
  two_factor_recovery_codes?: string;
  two_factor_confirmed_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface urlPayload {
  full_link: string;
}

export interface PaginateLinksResponse {
  current_page:   number;
  data:           LinkData[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface LinkData {
  id:         number;
  full_link:  string;
  short_link: string;
  user_id:    number;
  views:      number;
  created_at: Date;
  updated_at: Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}


