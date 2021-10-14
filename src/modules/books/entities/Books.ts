import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('books')
class Books {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  publishing_company: string;

  @Column()
  picture: string;

  @Column('text', { array: true })
  authors: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Books };
