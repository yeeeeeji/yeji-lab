export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          login_id: string;
          password: string;
          created_at: string;
        };
        Insert: {
          id?: never;
          login_id: string;
          password: string;
          created_at?: never;
        };
        Update: {
          id?: never;
          login_id?: string;
          password: string;
          created_at?: never;
        };
      };
      todos: {
        Row: {
          id: number;
          user_id: string;
          position: number;
          content: string;
          is_done: boolean;
          created_at: string;
        };
        Insert: {
          id?: never;
          user_id: string;
          position: number;
          content: string;
          is_done: boolean;
          created_at?: never;
        };
        Update: {
          id?: never;
          user_id: string;
          position: number;
          content: string;
          is_done: boolean;
          created_at?: never;
        };
      };
      todos_theme: {
        Row: {
          id: number;
          user_id: string;
          title: string;
          bg_color: string;
        };
        Insert: {
          id?: never;
          user_id: string;
          title: string;
          bg_color: string;
        };
        Update: {
          id?: never;
          user_id: string;
          title: string;
          bg_color: string;
        };
      };
    };
  };
}
