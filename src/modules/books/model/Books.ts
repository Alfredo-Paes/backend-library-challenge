import { v4 as uuidV4 } from 'uuid';

class Books {
  id?: string;

  title: string;

  publishing_company: string;

  picture: string;

  authors: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Books };
